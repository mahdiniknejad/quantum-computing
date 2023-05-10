from django.contrib import admin
from .models import File


class FileAdmin(admin.ModelAdmin):
	pass


admin.site.register(File, FileAdmin)
