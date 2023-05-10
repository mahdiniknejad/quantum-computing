from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authentication.urls', namespace='auth')),
    path('dashboard/', include('dashboard.urls', namespace='dashboard')),
    path('', include('general.urls', namespace='general')),
]
