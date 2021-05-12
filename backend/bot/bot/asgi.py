"""
ASGI config for bot project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.http import AsgiHandler #remove?
from channels.routing import ProtocolTypeRouter
import stock.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bot.settings')

application = ProtocolTypeRouter({
    "http": AsgiHandler(),#remove
    "websocket": AuthMiddlewareStack(
        URLRouter(
            stock.routing.websocket_urlpatterns
        )
    )

})
