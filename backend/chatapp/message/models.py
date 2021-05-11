from django.db import models
from django.contrib.auth import get_user_model
from uuid import uuid4
from room.models import Room

User = get_user_model()

class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    text = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ManyToManyField(Room, related_name='messages')
    create_date = models.DateTimeField(auto_now=True)
