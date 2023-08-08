from django.contrib import admin
from .models import Doc


# Register your models here.
class DocAdmin(admin.ModelAdmin):
    list_display = ["id"]


admin.site.register(Doc, DocAdmin)
