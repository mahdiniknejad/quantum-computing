from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class SignupSerializer(serializers.Serializer):
    username = serializers.EmailField()
    password = serializers.CharField()
