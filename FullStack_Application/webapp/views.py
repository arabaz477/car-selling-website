from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Student,Car,Mobile,Book,Laptop
from .serializers import (StudentSerializers,CarSerializers,
                          LaptopSerializers,MobileSerializers,BookSerializers,)
from .pagination import CarPagination
import razorpay
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order
from rest_framework.generics import ListAPIView
from .serializers import OrderSerializer

@api_view(['POST'])
def payment_success(request):

    Order.objects.create(
        payment_id=request.data['payment_id'],
        order_id=request.data['order_id'],
        amount=request.data['amount']
    )
    return Response({
        "message": "Order Saved Successfully"
    })


@api_view(['POST'])
def create_order(request):
    amount=int(request.data['amount']) * 100
    client=razorpay.Client(
        auth=(
            settings.RAZORPAY_KEY_ID,
            settings.RAZORPAY_KEY_SECRET
        )
    )

    order=client.order.create({
        "amount":amount,
        "currency":"INR"
    })
    return Response(order)


class StudentListView(ListAPIView):
    queryset = Student.objects.all()

    serializer_class = StudentSerializers

class CarListView(ListAPIView):
    queryset = Car.objects.all()
    serializer_class =CarSerializers
    pagination_class = CarPagination

class CarDetailView(RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializers


class LaptopListView(ListAPIView):
    queryset =Laptop.objects.all()
    serializer_class = LaptopSerializers

class MobileListView(ListAPIView):
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializers

class BookListView(ListAPIView):
    queryset =Book.objects.all()
    serializer_class = BookSerializers

def home(request):
    return render(request,"home.html")

def login_page(request):
    if request.method=="POST":
        username=request.POST.get("username")
        password=request.POST.get("password")

        if not User.objects.filter(username="username").exists():
            messages.error(request,"invalid_password")
            return redirect("login")

        user=authenticate(username=username,password=password)
        if user is None:
            messages.error(request,"invalid_password and username")
        else:
            login(request,user)
            return redirect("/")
    return render(request,'Login.jsx')

def register(request):
    if request.method=="POST":
        first_name=request.POST.get("first_name")
        last_name=request.POST.get("last_name")
        username=request.POST.get("username")
        password=request.POST.get("password")
        user=User.objects.filter(username=username)
        if user.exists():
            messages.info(request,"already account created")
            return redirect("login_page")
        user=User.objects.create_user(
            first_name=first_name,
            last_name=last_name,
            username=username,
        )

        user.set_password(password)
        user.save()
        messages.info(request,"account creating successfully")
        return redirect("Login")
    return render(request,'register.html')




class OrderListView(ListAPIView):
    queryset = Order.objects.all().order_by('-id')
    serializer_class = OrderSerializer