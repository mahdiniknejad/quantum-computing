from django import forms
from django.core import validators
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSignupForm(forms.ModelForm):
	password1 = forms.CharField(
		max_length=100, widget=forms.PasswordInput()
	)
	password2 = forms.CharField(
		max_length=100, widget=forms.PasswordInput(),
	)

	class Meta:
		model = User
		fields = ['email']

	def clean(self):
		cleaned_data = super().clean()

		password1 = cleaned_data.get("password1")
		password2 = cleaned_data.get("password2")

		if password1 != password2:
			raise ValidationError(
				_("password 2 is incorrect")
			)

	def clean_email(self):
		email = self.cleaned_data['email']

		if User.objects.get_user_by_email(email):
			raise ValidationError(
				_("User Exists")
			)

		return email
