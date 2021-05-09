from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Room
from .serializers import RoomSerializer


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    #TODO: Check if room Exists
    # MOVE API TO api direcotry
    return render(request, 'chat/room.html',{
        'room_name': room_name
    })


class RoomListAPIView(ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomRetrieveAPIView(RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
