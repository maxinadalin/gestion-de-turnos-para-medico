from django.shortcuts import render
from .serializers import CoberturaSerializers
from .models import Coberturas
from rest_framework import status,permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from django.db.models import Q

# Create your views here.

class CoberturasViews(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request,format=None):
        
        
        Coverage = Coberturas.objects.all()
        if Coverage.exists():
            Coverageserializers = CoberturaSerializers(Coverage,many=True)
            print(Coverage)
            return Response ({"mensaje": Coverageserializers.data},status = status.HTTP_200_OK)
     
        else:
            return Response ({"mensaje" : "no se encontraron categorias"},status = status.HTTP_404_NOT_FOUND)
        