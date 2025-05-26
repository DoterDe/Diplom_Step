from django.urls import path
from .views import test_api, login_api

urlpatterns = [
    path('test/', test_api),
    path('login/', login_api),
]
