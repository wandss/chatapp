import json
import csv
import requests
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

class StockConsumer(WebsocketConsumer):

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['stock_name']
        self.room_group_name = 'stock_%s' % self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        stock = data['stock']

        self.download_csv(stock)
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'stock_price',
                'stock': self.response
            }
        )

    def stock_price(self, event):
        stock = event['stock']
        self.send(text_data=json.dumps({
            'stock': stock
        }))

    def download_csv(self, stock_code):
        url = "https://stooq.com/q/l/?s={}&f=sd2t2ohlcv&h&e=csv".format(
                stock_code
               )
        with requests.Session() as rs:
            csv_content = rs.get(url)
            csv_content = csv_content.content.decode('utf-8')
            response = list(csv.reader(csv_content.splitlines(),
                delimiter=','))
        self.response = f'{response[1][0]} quote is ${response[1][6]} per share'



