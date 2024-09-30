from django.db import models

# Create your models here.

class Estados(models.Model):

        tipo = models.CharField(max_length= 50)
        class Meta:
            verbose_name = "Estado"
            verbose_name_plural = "Estados"
    
        def __str__(self):
         return self.tipo
    