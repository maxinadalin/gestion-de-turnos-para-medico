from django.contrib import admin

from apps.lugares.models import Lugares

class LugaresAdmin(admin.ModelAdmin):

    list_display = ('id', 'nombre','direccion')
    list_display_links = ('id', 'nombre','direccion')
    search_fields = ('id', 'nombre','direccion')
    list_per_page = 25

admin.site.register(Lugares, LugaresAdmin)