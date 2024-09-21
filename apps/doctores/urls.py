from django.urls import path
from .views import DoctoresViews

urlpatterns = [
    path("doctores", DoctoresViews.as_view())
]