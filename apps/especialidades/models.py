from django.db import models

# Create your models here.

class Especialidades(models.Model):
    class Meta:
        verbose_name = "Especialidad"
        verbose_name_plural = "Especialidades"
    
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    