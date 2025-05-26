from django.contrib import admin
from django.urls import path, re_path, include
from myapp.views import frontend , test_api
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('api/test/', test_api),
    path('api/', include('myapp.api_urls')),  
    re_path(r'^.*$', frontend),  
]
