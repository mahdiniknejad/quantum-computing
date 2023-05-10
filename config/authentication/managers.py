from django.contrib.auth.models import UserManager


class EditedUserManager(UserManager):
	def get_user_by_email(self, email):
		return super().get_queryset().filter(email=email).first()