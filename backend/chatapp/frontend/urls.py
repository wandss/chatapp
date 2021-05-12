from django.urls import path
from .views import AuthenticateAPIView, index

app_name = 'frontend'

urlpatterns = [
    path('', index),
    path('login', AuthenticateAPIView.as_view()),
]
