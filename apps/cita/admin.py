from django.contrib import admin

from apps.cita.models import Cita

class CitaAdmin(admin.ModelAdmin):

    list_display = ('id', 'paciente','doctor','fechaTurno')
    list_display_links = ('id', 'paciente','doctor' )
    search_fields = ('paciente', 'doctor' )
    list_per_page = 25

admin.site.register(Cita, CitaAdmin)