from django.contrib.auth.models import UserManager as DefaultUserManager


class UserManager(DefaultUserManager):

    def is_exist_user(self, email):
        return self.get_queryset().filter(email=email).first()