from django.db import models
from datetime import datetime
from apps.coberturas.models import Coberturas

# Create your models here.


class Paciente(models.Model):
    class Meta:
        verbose_name = "paciente"
        verbose_name_plural = "pacientes"
        
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    Naciemiento = models.DateField(null=True,blank=True)
    email = models.EmailField(max_length=100)
    dni = models.CharField(max_length=20)
    cobertura = models.ForeignKey(Coberturas,on_delete=models.CASCADE)
    fechaEntrada = models.DateTimeField(default=datetime.now)
        

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
        