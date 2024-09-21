from django.urls import path,include
from .views import CoberturasViews,SearchCoberturas

urlpatterns = [
    path('coberturas', CoberturasViews.as_view()),
    path('searchCoberturas',SearchCoberturas.as_view())
]
