from django.contrib import admin
from apps.especialidades.models import Especialidades


# Register your models here.

class EspecialidadesAdmin(admin.ModelAdmin):
    list_display = ("nombre",)
    
    

admin.site.register(Especialidades,EspecialidadesAdmin)