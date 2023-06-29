from django.contrib.auth.models import UserManager as DefaultUserManager


class UserManager(DefaultUserManager):

    def is_exist_user(self, username):
        return self.get_queryset().filter(username=username).first()