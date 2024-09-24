from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CitaSerializers
from .models import Cita
from apps.pacientes.models import Paciente
from apps.doctores.models import Doctores

# Create your views here.

class CitasView(APIView):
    def get(self,request, pacienteId, format = None):
        
        paciente  = Paciente.objects.filter(id=pacienteId)

        if paciente.exists():
            return Response
