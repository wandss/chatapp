from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from .serializers import RoomSerializer
from room.models import Room


class RoomListCreateAPIView(ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomRetrieveAPIView(RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
