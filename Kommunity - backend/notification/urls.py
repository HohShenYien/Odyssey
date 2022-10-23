from django.urls import path, include
from .views import (
    NotificationView,
)

urlpatterns = [
    path('api', NotificationView.as_view()),
]