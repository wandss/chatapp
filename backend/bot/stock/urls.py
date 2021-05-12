from django.urls import path
from .views import csv_parser

app_name = 'stock'

urlpatterns = [
    path('', csv_parser, name='stock')
]

