from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Room
from .serializers import RoomSerializer


class RoomListAPIView(ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomRetrieveAPIView(RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
