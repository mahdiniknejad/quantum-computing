from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from .managers import UserManager


class EditedUser(AbstractUser):
    username = models.EmailField(_("username"), max_length=150, unique=True)

    objects = UserManager()

    EMAIL_FIELD = "username"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]