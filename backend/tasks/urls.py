from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TaskViewSet, CategoryViewSet, StatusViewSet,
    register_view, login_view, logout_view, current_user_view
)

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='task')
router.register('categories', CategoryViewSet, basename='category')
router.register('statuses', StatusViewSet, basename='status')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('current-user/', current_user_view, name='current-user'),
]