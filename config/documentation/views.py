from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Doc
from .serializers import ImageSerializer


class DocViewSet(viewsets.mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ImageSerializer

    def get_queryset(self):
        return Doc.objects.all()

    def list(self, request, *args, **kwargs):
        doc = self.get_queryset().first()
        if doc:
            serializer = self.get_serializer(doc)
            return Response(serializer.data, status=200)
        else:
            return Response({"content": ""}, status=200)
