from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializers

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializers