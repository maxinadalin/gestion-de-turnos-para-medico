from rest_framework import serializers
from .models import Lugares

class LugaresSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lugares
        fields = [
            "id",
            "nombre",
            "provincia",
            "ciudad",
            "direccion",
        ]