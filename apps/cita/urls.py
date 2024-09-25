from django.urls import path

from .views import CitasView

urlpatterns = [
    path("citas/<pacienteId>",CitasView.as_view())
]
