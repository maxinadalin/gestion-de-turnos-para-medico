from django.db import models

# Create your models here.


class Lugares(models.Model):
    class Meta:
        verbose_name = "Lugar"
        verbose_name_plural = "Lugares"
        
    nombre = models.CharField( max_length=50)
    provincia = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    
    