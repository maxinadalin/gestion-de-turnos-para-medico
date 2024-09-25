from django.db import models
from datetime import datetime   
from apps.pacientes.models import Paciente
from apps.doctores.models import Doctores
# Create your models here.


class Cita(models.Model):
    class Meta:
        verbose_name = "Cita"
        verbose_name_plural = "Citas"
        
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctores,on_delete=models.CASCADE)
    fechaTurno = models.DateTimeField(auto_now=False, auto_now_add=False)
    fechaSolicitud = models.DateField(default = datetime.now)
    
    def __str__(self):
        return self.paciente.nombre
    
