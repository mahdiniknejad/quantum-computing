import os
import random
from subprocess import PIPE, run
# import base64
# from io import BytesIO
# import numpy as np
# import pandas as pd
# import matplotlib.pyplot as plt
from django.http import JsonResponse
# from django.views import View
from django.conf import settings
from rest_framework import viewsets, permissions, authentication
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from .models import File
from .serializers import FileSerializer


def out(command):
    result = run(command, stdout=PIPE, stderr=PIPE, universal_newlines=True, shell=True)
    return result.stdout


class FileViewSet(viewsets.ModelViewSet):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (authentication.TokenAuthentication, )
	serializer_class = FileSerializer

	def get_queryset(self):
		return self.request.user.file_set.all()

	@swagger_auto_schema(methods=['POST'])
	@action(methods=['post'], detail=True)
	def execute(self, request, pk, *args, **kwargs):
		
		code = File.methods.filter(id=pk).first().code
		temp_name = str(random.randint(10000, 99999)) + '.py'
		file_path = str(settings.BASE_DIR) + "/code/" + temp_name

		os.system(f"touch {file_path}")
		os.system(f"echo \"{code}\" > {file_path}")
		res = out(f"{settings.BASE_DIR}/./manage.py shell < {file_path}")
		os.system(f"rm {file_path}")
		

		return JsonResponse({"result": res}, status=200)


		# try:
		# 	exec_locals = {}
		# 	exec(code, {"np": np, "pd": pd}, exec_locals)

		# 	if 'result' in exec_locals:
		# 		result = exec_locals['result']

		# 		if isinstance(result, (np.ndarray, pd.DataFrame, pd.Series)):
		# 			buf = BytesIO()
		# 			plt.figure()
		# 			plt.plot(result)
		# 			plt.savefig(buf, format='png')
		# 			buf.seek(0)
		# 			img_base64 = base64.b64encode(buf.read()).decode('ascii')
		# 			plt.close()

		# 			return JsonResponse({"image": img_base64}, status=200)

		# 		else:
		# 			return JsonResponse({"result": str(result)}, status=200)

			# else:
			# 	return JsonResponse({"error": "No 'result' variable found."}, status=400)

		# except Exception as e:
		# 	return JsonResponse({"error": str(e)}, status=400)
