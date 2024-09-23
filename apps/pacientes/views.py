from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framwork.response import Response
from .models import Paciente
from .serializers import pacienteSerializers

# Create your views here.


