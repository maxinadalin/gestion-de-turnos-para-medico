from rest_framework import serializers
from .models import Doctores


class DoctoreSerializers(serializers.ModelSerializer):
    # edad = serializers.DateField(format='%d-%m-%Y', input_formats=['%d-%m-%Y'])
    class Meta:
        model = Doctores
        fields = [
            'id',
            'nombre',
            'apellido',
            'especialidad',
            'edad'
        ]