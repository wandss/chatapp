from django.urls import path
from .views import RoomListAPIView, RoomRetrieveAPIView

app_name = 'Room'

urlpatterns = [
    path('', RoomListAPIView.as_view()),
    path('detail/<uuid:pk>', RoomRetrieveAPIView.as_view())
]


