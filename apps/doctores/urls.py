from django.urls import path
from .views import DoctoresViews,SearchDoctores

urlpatterns = [
    path("doctores", DoctoresViews.as_view()),
    path("searchDoctores",SearchDoctores.as_view())
]