from django.urls import path
from .views import (
    SignupView,
    EditedLoginView,
    EditedLogoutView,
)


app_name = 'auth'


urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', EditedLoginView.as_view(), name='login'),
    path('logout/', EditedLogoutView.as_view(), name='logout'),
]