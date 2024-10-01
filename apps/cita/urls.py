from django.urls import path

from .views import CitasView,CitaCancel,solicitarCita

urlpatterns = [
    path("citas/<pacienteId>",CitasView.as_view()),
    path("cancelarCita/<cita_id>",CitaCancel.as_view()),
    path("solicitarCita",solicitarCita.as_view())


]
