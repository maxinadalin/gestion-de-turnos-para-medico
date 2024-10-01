from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CitaSerializers,DoctoreSerializers
from .models import Cita
from apps.pacientes.models import Paciente
from apps.doctores.models import Doctores
from apps.especialidades.models import Especialidades

# Create your views here.

class CitasView(APIView):
    def get(self,request, pacienteId, format = None):
        
        paciente = int(pacienteId)
        print(f"es te es paciente numero {paciente}")
        if Paciente.objects.filter(id=paciente).exists():
            pacienteCita = Cita.objects.filter(paciente=paciente)
            cita_serializers = CitaSerializers(pacienteCita, many = True)
            if len(pacienteCita) == 0:
                return Response	({"mensaje":"no se encontraron cita para este paciente"},status = status.HTTP_404_NOT_FOUND)
            else:
                return Response ({"Cita" : cita_serializers.data},status = status.HTTP_200_OK)
        else:
            return Response	({"mensaje":"no se encontro un paciente"},status = status.HTTP_404_NOT_FOUND)


class CitaCancel(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request,cita_id,format=None):
        
        cita = Cita.objects.filter(id=cita_id)
        
        if cita.exists():
            cita.delete()
            return Response ({"mensaje":"la cita ha sido eliminada correctamente"}, status = status.HTTP_200_OK)
        else:
            return Response({"mensaje" : "no se encontraron citas"}, status = status.HTTP_404_NOT_FOUND)
        
        

class solicitarCita(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request, format = None):
        data = self.request.data
        
        especialidades = Especialidades.objects.all()
        
        especialidad_id = data["especialidad"]
        lugar = data["lugar"]

        if especialidad_id == None:
            return Response ({"mensaje":"debe ingresar un doctor"}, status = status.HTTP_400_BAD_REQUEST)
        else : 
            
            doctores = Doctores.objects.filter(especialidad = especialidad_id).all()
            print(doctores)
            
            doctoreSerializers = DoctoreSerializers(doctores,many = True)
            
            
            return Response({"doctor": doctoreSerializers.data,
                             "lugar": lugar}, status = status.HTTP_200_OK)