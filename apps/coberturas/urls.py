from django.urls import path,include
from .views import CoberturasViews

urlpatterns = [
    path('coberturas', CoberturasViews.as_view())
]
