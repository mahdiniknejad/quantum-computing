from rest_framework import routers
from .views import FileViewSet


app_name = 'files'

router = routers.SimpleRouter()
router.register('', FileViewSet, basename='')
urlpatterns = router.urls
