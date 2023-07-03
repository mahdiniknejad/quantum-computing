from django.contrib.auth import get_user_model
from rest_framework import permissions, authentication, status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from .serializers import SignupSerializer


User = get_user_model()


class UserSignUp(CreateAPIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = [authentication.TokenAuthentication]
    serializer_class = SignupSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.data.get("username")
        password = serializer.data.get("password")

        if User.methods.is_exist_user(username=username):
            return Response(
                {"detail": "user exists!"}, status=status.HTTP_400_BAD_REQUEST
            )

        user = User(username=username)
        user.set_password(password)
        user.save()

        return Response(status=status.HTTP_201_CREATED)
