# myapp/views.py
import os
from django.conf import settings
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework.response import Response
from rest_framework.decorators import api_view


def frontend(request):
    index_path = os.path.join(settings.BASE_DIR, 'frontend', 'build', 'index.html')
    if os.path.exists(index_path):
        with open(index_path, encoding='utf-8') as f:
            return HttpResponse(f.read())
    return HttpResponseNotFound('index.html не найден. Убедись, что выполнил npm run build')




@api_view(['GET'])
def test_api(request):
    return Response({'message': 'Hello from Django API'})