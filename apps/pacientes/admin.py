from django.contrib import admin

from apps.pacientes.models import Paciente

class PacientesAdmin(admin.ModelAdmin):

    list_display = ('id', 'nombre','apellido')
    list_display_links = ('id', 'nombre', )
    search_fields = ('nombre', 'apellido' )
    list_per_page = 25

admin.site.register(Paciente, PacientesAdmin)