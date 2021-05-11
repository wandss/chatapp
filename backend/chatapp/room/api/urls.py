from django.urls import path
from .views import RoomListCreateAPIView, RoomRetrieveAPIView

app_name = 'RoomAPI'

urlpatterns = [
    path('rooms', RoomListCreateAPIView.as_view()),
    path('detail/<uuid:pk>', RoomRetrieveAPIView.as_view())
]
