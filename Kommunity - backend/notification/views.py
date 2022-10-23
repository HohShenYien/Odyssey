from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from firebase_admin.messaging import Message
from fcm_django.models import FCMDevice

# You can still use .filter() or any methods that return QuerySet (from the chain)

class NotificationView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        devices = FCMDevice.objects.all()
        devices.send_message(Message(
            data={
                "Nick" : "Mario",
                "body" : "great match!",
                "Room" : "PortugalVSDenmark"
           },
           topic="Optional topic parameter: Whatever you want",
        ))
        return Response("notification", status=status.HTTP_200_OK)

    # 2. Create
    def post(self, request, *args, **kwargs):
        return Response("abcde", status=status.HTTP_200_OK)