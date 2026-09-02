from rest_framework import serializers
from .models import Student,Car,Mobile,Book,Laptop


class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'


class LaptopSerializers(serializers.ModelSerializer):
    class Meta:
        model=Laptop
        fields='__all__'


class CarSerializers(serializers.ModelSerializer):
    class Meta:
        model=Car
        fields='__all__'

class MobileSerializers(serializers.ModelSerializer):
    class Meta:
        model=Mobile
        fields='__all__'

class BookSerializers(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields='__all__'

