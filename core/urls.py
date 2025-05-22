# core/urls.py
from myapp.views import test_api
from django.contrib import admin
from django.urls import path, re_path
from myapp.views import frontend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/test/', test_api),
    re_path(r'^.*$', frontend),  
]
