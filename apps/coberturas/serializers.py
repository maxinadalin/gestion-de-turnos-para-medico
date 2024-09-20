from rest_framework import serializers
from .models import Coberturas

class CoberturaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Coberturas
        fields = [
            'id',
            'nombre',
            'descripcion',
            'photo'
        ]