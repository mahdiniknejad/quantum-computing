from rest_framework import routers
from .views import FileViewSet, ImageViewSet


app_name = 'files'

router = routers.SimpleRouter()
router.register('', FileViewSet, basename='')
router.register('image', ImageViewSet, basename='image')
urlpatterns = router.urls
