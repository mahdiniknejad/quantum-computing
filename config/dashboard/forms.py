from django import forms
from django_ace import AceWidget
from .models import File


class FileForm(forms.ModelForm):
	code = forms.CharField(
		widget=AceWidget(
			mode='python', 
			theme='twilight',
			# wordwrap=False,
			# width="500px",
			# height="300px",
			# minlines=None,
			# maxlines=None,
			# showprintmargin=True,
			# showinvisibles=False,
			# usesofttabs=True,
			# tabsize=None,
			# fontsize=None,
			# toolbar=True,
			# readonly=False,
			showgutter=True,  # To hide/show line numbers
			# behaviours=True,  # To disable auto-append of quote when quotes are entered
		)
	)

	class Meta:
		model = File
		fields = ['name', 'code']

	def clean_name(self):
		name = self.cleaned_data['name']

		if self.user:
			file = File.objects.filter(name=name, user=self.user).first()
			if file:
				raise ValidationError(_('file name exists'))

		return name
