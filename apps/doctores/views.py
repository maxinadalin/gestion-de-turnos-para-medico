from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Doctores
from .serializers import DoctoreSerializers
from django.db.models import Q

# Create your views here.

class DoctoresViews(APIView):
    permission_classes=(permissions.AllowAny,)
    
    def get(self,request,format=None):
        doctores = Doctores.objects.all()
        
        if doctores.exists():
            doctores = DoctoreSerializers(doctores,many=True)
            return Response ({"mensaje" : doctores.data},status = status.HTTP_200_OK)
        else:
            return Response({"mensaje":"no se encontraron doctores"},status=status.HTTP_404_NOT_FOUND)


class SearchDoctores(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self,request, format = None):
        data = self.request.data
        
        search = data["search_Doctores"]
        
        if len(search) == 0:
            search = Doctores.objects.all()
            if not search.exists():
                return Response ({"mensaje":"no se encontraron doctores"},status = status.HTTP_404_NOT_FOUND)
                
        else:
            search = Doctores.objects.filter(
                Q(nombre__icontains = search) | Q(apellido__icontains = search)| Q(especialidad__icontains=search)
            )

        search_Doctores = DoctoreSerializers(search,many = True)
        
        if search.exists():
            return Response ({"mensaje" : search_Doctores.data}, status = status.HTTP_200_OK)
        else:
            return Response ({"mensaje":"no se encontraron doctores"},status = status.HTTP_404_NOT_FOUND)