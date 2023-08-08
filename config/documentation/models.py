from django.db import models

# Create your models here.


class Doc(models.Model):
    content = models.TextField()
