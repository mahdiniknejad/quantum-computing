from rest_framework import serializers
from .models import Doc


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = "__all__"
