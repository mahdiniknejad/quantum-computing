from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import File
from .forms import FileForm


class CreateFileView(LoginRequiredMixin, CreateView):
	model = File
	fields = ['name']
	template_name = 'dashboard/create_file.html'

	def get_form_kwargs(self):
		kwargs = super(CreateFileView, self).get_form_kwargs()
		if kwargs['instance'] is None:
			kwargs['instance'] = File()
		kwargs['instance'].user = self.request.user
		return kwargs


class UpdateFileView(LoginRequiredMixin, UpdateView):
	model = File
	fields = '__all__'
	form_class = FileForm


class DetailFileView(LoginRequiredMixin, DetailView):
	model = File
	form_class = FileForm
	fields = '__all__'
	slug_field = 'pk'



class DeleteFileView(LoginRequiredMixin, DeleteView):
	model = File
