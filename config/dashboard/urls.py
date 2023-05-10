from django.urls import path
from .views import CreateFileView, DetailFileView


app_name = 'dashboard'


urlpatterns = [
    path('create/', CreateFileView.as_view(), name='create'),
    path('detail/<int:pk>/', DetailFileView.as_view(), name='detail'),
]
