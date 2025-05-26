from rest_framework.decorators import api_view , permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, HttpResponseNotFound
from django.conf import settings
import os



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def test_api_protected(request):
    return Response({'message': f'Hello, {request.user.username}! This is protected data.'})

# ⚛️ React-страница (index.html)
def frontend(request):
    index_path = os.path.join(settings.BASE_DIR, 'frontend', 'build', 'index.html')
    if os.path.exists(index_path):
        with open(index_path, encoding='utf-8') as f:
            return HttpResponse(f.read())
    return HttpResponseNotFound('index.html не найден. Выполни npm run build')

# 🧪 Пример простого API
@api_view(['GET'])
def test_api(request):
    return Response({'message': 'Привет из Django API!'})

# 🔐 Пример login API (будет до JWT)
@api_view(['POST'])
def login_api(request):
    data = request.data
    username = data.get('username')
    password = data.get('password')

    if username == 'admin' and password == '123':
        return Response({'token': 'fake-jwt-token-123'})  # пока фейковый токен
    return Response({'error': 'Неверные данные'}, status=400)
