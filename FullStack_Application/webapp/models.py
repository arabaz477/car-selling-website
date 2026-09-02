from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    age=models.IntegerField(max_length=100)
    phone=models.IntegerField(max_length=100)
    email=models.EmailField(unique=True)
    resume=models.ImageField(upload_to='images/')
    fees=models.IntegerField(max_length=100)

    def __str__(self):
        return self.name

class Laptop(models.Model):
    laptop_name=models.CharField(max_length=100)
    laptop_model=models.CharField(max_length=100)
    laptop_color=models.CharField(max_length=100,choices=[('black','black'),
                                                          ('silver','silver'),
                                                          ('gold','gold'),
                                                          ('skyblue','skyblue')])
    laptop_price=models.IntegerField(max_length=100)
    laptop_storage=models.IntegerField(max_length=100)
    laptop_type=models.CharField(max_length=100)
    laptop_images=models.ImageField(upload_to='images/')

    def __str__(self):
        return self.laptop_name

class Mobile(models.Model):
    mobile_name=models.CharField(max_length=100)
    mobile_model=models.CharField(max_length=100)
    mobile_color=models.CharField(max_length=100,choices=[('black','black'),
                                                          ('silver','silver'),
                                                          ('gold','gold'),
                                                          ('skyblue','skyblue')])
    mobile_price=models.IntegerField(max_length=100)
    mobile_storage=models.IntegerField(max_length=100)
    mobile_version=models.CharField(max_length=100)
    mobile_images=models.ImageField(upload_to='images/')

    def __str__(self):
        return self.mobile_name

class Car(models.Model):
    car_name=models.CharField(max_length=100)
    car_model=models.CharField(max_length=100)
    car_color=models.CharField(max_length=100,choices=[('black','black'),
                                                       ('silver','silver'),
                                                       ('red','red'),
                                                       ('white','white')])
    car_price=models.IntegerField(max_length=100)
    car_speed=models.IntegerField(max_length=100)
    car_version=models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    car_images=models.ImageField(upload_to='images/',blank=True,null=True)
    car_images1=models.ImageField(upload_to='images/',blank=True,null=True)
    car_images2=models.ImageField(upload_to='images/',blank=True,null=True)
    car_images3=models.ImageField(upload_to='images/',blank=True,null=True)

    def __str__(self):
        return self.car_name

class Book(models.Model):
    book_name=models.CharField(max_length=100)
    book_type=models.CharField(max_length=100,choices=[('Phycology','Phycology'),
                                                       ('Motivational','Motivational'),
                                                       ('Technology','Technology'),
                                                       ("Self development","self development")
                                                       ])
    book_price=models.IntegerField(max_length=100)
    book_writer=models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.book_name














