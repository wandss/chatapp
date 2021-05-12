from django.urls import path
from .views import AuthenticateAPIView

app_name = 'frontend'

urlpatterns = [
    path('login', AuthenticateAPIView.as_view()),
]
