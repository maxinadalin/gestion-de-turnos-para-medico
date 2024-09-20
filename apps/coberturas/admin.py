from django.contrib import admin

from apps.coberturas.models import Coberturas

class CoverageAdmin(admin.ModelAdmin):

    list_display = ('id', 'nombre',)
    list_display_links = ('id', 'nombre', )
    search_fields = ('nombre', 'descripcion', )
    list_per_page = 25

admin.site.register(Coberturas, CoverageAdmin)