from django.urls import path
from .views import MainPageView


app_name = 'general'

urlpatterns = [
	path('', MainPageView.as_view(), name='main_page'),
]