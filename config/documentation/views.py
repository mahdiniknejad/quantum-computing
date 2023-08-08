from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Doc
from .serializers import DocSerializer


class DocViewSet(viewsets.mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = DocSerializer

    def get_queryset(self):
        return Doc.objects.all()

    def get(self, request, *args, **kwargs):
        doc = self.get_queryset().first()
        if doc:
            serializer = DocSerializer(doc)
            return Response(serializer.data, status=200)
            # return Response({"content": ""}, status=200)
        else:
            return Response({"content": ""}, status=200)
