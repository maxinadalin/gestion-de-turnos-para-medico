from rest_framework import serializers
from .models import Cita
from apps.doctores.serializers import DoctoreSerializers

class CitaSerializers(serializers.ModelSerializer):
    fechaTurno = serializers.DateTimeField(format='%d-%m-%Y', input_formats=['%d-%m-%Y'])
    class Meta:
        model = Cita
        fields = [
            "id",
            'paciente',
            'doctor',
            "lugar",
            'fechaTurno',
            'fechaSolicitud',
        ]              
        