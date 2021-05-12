from django.contrib.auth import authenticate, get_user_model
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import status

class AuthenticateAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request ):
        User = get_user_model()
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is None:
            user = User(username=username, password=password)
            user.save()

        return Response({"username": user.username}, status.HTTP_200_OK)
