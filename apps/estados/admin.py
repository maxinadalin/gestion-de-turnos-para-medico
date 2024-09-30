from django.contrib import admin
from .models import Estados
# Register your models here.

class EstadosAdmin(admin.ModelAdmin):
 
        list_display = ("tipo",)
    
admin.site.register(Estados,EstadosAdmin)
