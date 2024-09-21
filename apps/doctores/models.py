from django.db import models



# Create your models here.

class Doctores(models.Model):
    class Meta:
        verbose_name = "Doctor"
        verbose_name_plural = "Doctores"
        
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    especialidad = models.CharField(max_length=50)
    edad = models.DateField( null=True,blank=True)
        
    def __str__(self):
        return self.nombre
    