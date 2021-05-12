import json
import re
import websocket
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth import get_user_model
from .models import Room

class ChatConsumer(WebsocketConsumer):

    def load_data(self):
        messages = Room.objects.get(
                name__iexact=self.room_name
                ).messages.all()
        for message in messages:
            self.chat_message({
                'id': str(message.id),
                'message': message.text,
                'username':message.owner.username,
                'sent': str(message.create_date)
                })



    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        self.accept()
        self.load_data()

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )


    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )


    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        username = text_data_json['username']
        id = text_data_json['id']
        sent = text_data_json['sent']

        if re.match(r'^/stock=.*$', message) is not None:
            stock_code = {"stock": message.split('=')[-1]}
            self.stock_price(stock_code)
            message = self.message
            #SET THE USERNAME TO BE THE ROBOT USERNAME

        self.store_message(message, username)
        message = self.new_message.text
        id = str(self.new_message.id)
        sent = str(self.new_message.create_date)

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'username': username,
                'id': id,
                'sent': sent,
            }
        )

    def chat_message(self, event):
        id = event['id']
        message = event['message']
        username = event['username']
        sent = event['sent']


        self.send(text_data=json.dumps({
            "id": id,
            "message":message,
            "username": username,
            "sent": sent,
        }))

    def store_message(self, message, username):
        User = get_user_model()
        user = self.scope.get('user')

        if user.is_anonymous:
            user = User.objects.get(username=username)

        room = Room.objects.get(name__iexact=self.room_name)
        message = room.messages.create(
            text=message,
            owner=user
        )
        message.save()
        self.new_message = message

    def stock_price(self, stock):
        ws = websocket.WebSocket()
        ws.connect('ws://127.0.0.1:8001/ws/stock/price/')
        ws.send(json.dumps(stock))
        stock = json.loads(ws.recv())
        self.message = stock['stock']






#TODO:
# Here when the /stock=stock_code
# is passed, a call to the "robot" will be made using rabbit MQ
# the, response, will be sent to the chatroom as owned by the bot


