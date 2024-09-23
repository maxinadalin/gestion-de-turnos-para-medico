from django.urls import path
from .views import PacientesViews

urlpatterns = [
    path("pacientes",PacientesViews.as_view())
]
