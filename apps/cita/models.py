from django.db import models
from datetime import date  
from apps.pacientes.models import Paciente
from apps.doctores.models import Doctores
from apps.lugares.models import Lugares
from apps.estados.models    import Estados
# Create your models here.


class Cita(models.Model):
    class Meta:
        verbose_name = "Cita"
        verbose_name_plural = "Citas"
        
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctores,on_delete=models.CASCADE)
    lugar = models.ForeignKey(Lugares,on_delete=models.CASCADE, null=True, blank=True)
    fechaTurno = models.DateTimeField(auto_now=False, auto_now_add=False)
    fechaSolicitud = models.DateField(default = date.today)
    estado = models.ForeignKey(Estados,on_delete=models.CASCADE, default=3, null = True, blank= True)
    
    
    def __str__(self):
        return self.paciente.nombre
    
