from rest_framework import serializers
from .models import File, Image


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"
        read_only_fields = ["user", "executed"]

    def create(self, validated_data):
        user = self.context["request"].user
        validated_data["user"] = user
        return super().create(validated_data)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"
        read_only_fields = ["image", "file"]


class PackageInstallerSerializer(serializers.Serializer):
    package = serializers.CharField(required=True)
