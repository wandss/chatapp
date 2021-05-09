from django.urls import path
from .views import RoomListAPIView, RoomRetrieveAPIView, index, room

app_name = 'Room'

urlpatterns = [
    path('', index, name='index'),
    path('<str:room_name>/', room, name='room'),
    path('rooms', RoomListAPIView.as_view()),
    path('detail/<uuid:pk>', RoomRetrieveAPIView.as_view())
]


