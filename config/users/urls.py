from django.urls import include, path


app_name = 'users'


urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
]
