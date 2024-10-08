
# 3.1
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    
    path('api/coberturas/',include('apps.coberturas.urls')),
    path('api/doctores/',include('apps.doctores.urls')),
    path('api/pacientes/',include('apps.pacientes.urls')),
    path('api/citas/',include('apps.cita.urls')),


    
    
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #we add static to work 

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
#this is to make django can read all file the react