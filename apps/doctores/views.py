from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Doctores
from .serializers import DoctoreSerializers

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

