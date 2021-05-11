from django.shortcuts import render, HttpResponse
from .models import Room


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    #TODO: Check if room Exists
    # MOVE API TO api direcotry
    # rooms can't have space for names. validate

    if not Room.objects.filter(name__icontains=room_name).exists():
      return HttpResponse('Change this to 404')

    return render(request, 'chat/room.html',{
        'room_name': room_name
    })
