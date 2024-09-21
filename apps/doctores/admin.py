from django.contrib import admin

from apps.doctores.models import Doctores

class DoctoresAdmin(admin.ModelAdmin):

    list_display = ('id', 'nombre','apellido','especialidad')
    list_display_links = ('id', 'nombre', )
    search_fields = ('nombre', 'apellido','especialidad' )
    list_per_page = 25

admin.site.register(Doctores, DoctoresAdmin)