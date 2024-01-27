from . import views
from django.urls import path, include 
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.main, name = 'main'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)