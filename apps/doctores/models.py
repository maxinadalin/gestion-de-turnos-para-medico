from django.db import models
from apps.especialidades.models import Especialidades




# Create your models here.

class Doctores(models.Model):
    class Meta:
        verbose_name = "Doctor"
        verbose_name_plural = "Doctores"
        
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    especialidad = models.ForeignKey(Especialidades,null=False,blank=False,on_delete=models.CASCADE)
    edad = models.IntegerField(null=True,)
        
    def __str__(self):
        return self.nombre
    