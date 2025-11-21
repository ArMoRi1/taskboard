from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, CategoryViewSet, StatusViewSet

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='task')
router.register('categories', CategoryViewSet, basename='category')
router.register('statuses', StatusViewSet, basename='status')

urlpatterns = [
    path('', include(router.urls)),
]