from rest_framework import serializers
from .models import Cita

class CitaSerializers(serializers.ModelSerializer):
    fechaTurno = serializers.DateTimeField(format='%d-%m-%Y', input_formats=['%d-%m-%Y'])
    class Meta:
        model = Cita
        fields = [
            'paciente',
            'doctor',
            'fechaTurno',
            'fechaSolicitud',
        ]              