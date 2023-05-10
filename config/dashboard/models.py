from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from django.contrib.auth import get_user_model


User = get_user_model()


class File(models.Model):
	name = models.CharField(_('name'), max_length=100)
	user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_('user'))
	code = models.TextField(_('code'), null=True, blank=True)
	result = models.TextField(_('result'), null=True, blank=True)
	created = models.DateTimeField(_('create'), auto_now_add=True)
	updated = models.DateTimeField(_('update'), auto_now=True)

	def __str__(self):
		return str(self.name)

	def get_absolute_url(self):
		return f"/dashboard/detail/{self.id}/"
