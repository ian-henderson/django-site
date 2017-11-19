from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('choices', views.ChoiceViewSet)
router.register('polls', views.PollViewSet)
urlpatterns = router.urls