from django.contrib import admin
from .models import File, Image

# Register your models here.


class FileAdmin(admin.ModelAdmin):
    list_display = ["name"]


class ImageAdmin(admin.ModelAdmin):
    list_display = ["file__id"]


admin.site.register(File, FileAdmin)
admin.site.register(Image, ImageAdmin)
