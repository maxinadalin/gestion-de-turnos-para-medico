from rest_framework import serializers
from .models import Paciente

class pacienteSerializers(serializers.ModelSerializer):
    Naciemiento = serializers.DateField(format='%d-%m-%Y', input_formats=['%d-%m-%Y'])

    class Meta:
        model = Paciente
        fields = [
            "id",
            "nombre",
            "apellido",
            "Naciemiento",
            "email",
            "dni",
            "cobertura",
            "fechaEntrada",
        ]