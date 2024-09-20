from django.db import models
from datetime import datetime

# Create your models here.



class Coberturas(models.Model):
    class Meta:
        verbose_name = 'cobertura'
        verbose_name_plural = 'coberturas'
        
        
        
    nombre = models.CharField( max_length=50)
    descripcion = models.TextField()
    photo = models.ImageField(upload_to='photos/%Y/%m/')
    
    def get_thumbnail(self):
        if self.photo:
            return self.photo.url
        return ''
    
    def __str__(self):
        return self.nombre
    
  