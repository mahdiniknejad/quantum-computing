from rest_framework import routers
from .views import DocViewSet


app_name = "docs"

router = routers.SimpleRouter()
router.register("", DocViewSet, basename="")
urlpatterns = router.urls
