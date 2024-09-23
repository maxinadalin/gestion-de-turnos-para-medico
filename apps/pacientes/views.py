from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Paciente
from .serializers import pacienteSerializers

# Create your views here.


class PacientesViews(APIView):
    permission_classes=(permissions.AllowAny,)
    
    def get(self,request,format=None):
        pacientes = Paciente.objects.all()
        
        if pacientes.exists():
            pacientes = pacienteSerializers(pacientes,many=True)
            return Response ({"mensaje" : pacientes.data},status = status.HTTP_200_OK)
        else:
            return Response({"mensaje":"no se encontraron pacientes"},status=status.HTTP_404_NOT_FOUND)

