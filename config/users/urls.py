from django.urls import include, path
from .views import UserSignUp


app_name = 'users'


urlpatterns = [
    path('auth/signup/', UserSignUp.as_view()),
    path('auth/', include('dj_rest_auth.urls')),
]
