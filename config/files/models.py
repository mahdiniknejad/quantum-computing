from django.db import models
from django.contrib.auth import get_user_model
from .managers import FileManager


User = get_user_model()


class File(models.Model):
    name = models.CharField(max_length=100)
    code = models.TextField(blank=True, null=True)
    executed = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    methods = FileManager()


class Image(models.Model):
    image = models.ImageField(upload_to='plots')
    file = models.ForeignKey(File, on_delete=models.CASCADE)


