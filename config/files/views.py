import os
import random
from subprocess import PIPE, STDOUT, run
from django.http import JsonResponse
from django.conf import settings
from rest_framework import viewsets, permissions, authentication
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from .models import File, Image
from .serializers import FileSerializer
from .modules import check_some_codes


def out(command):
    result = run(command, stdout=PIPE, stderr=STDOUT, universal_newlines=True, shell=True)
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
		
		file = File.methods.filter(id=pk).first()
		code = file.code
		code, pic = check_some_codes(code)
		temp_name = str(random.randint(10000, 99999)) + '.py'
		file_path = str(settings.BASE_DIR) + "/code/" + temp_name

		os.system(f"touch {file_path}")
		os.system(f"echo \"{code}\" > {file_path}")
		res = out(f"{settings.BASE_DIR}/./manage.py shell < {file_path}")
		res = '\n'.join(res.split('\n')[-5:])
		os.system(f"rm {file_path}")

		if os.path.isfile(pic):
			print('here')
			Image.objects.create(image=pic, file=file)

		return JsonResponse({"result": res}, status=200)
