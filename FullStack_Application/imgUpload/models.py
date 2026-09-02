from django.db import models

class ImagesUpload(models.Model):
    car=models.ImageField(upload_to="old_car")
    name=models.CharField(max_length=50)
    speed=models.IntegerField(max_length=50)
    model=models.IntegerField(max_length=50)
    brand=models.IntegerField(max_length=50)
    price=models.IntegerField(max_length=200)
    car_about=models.TextField(max_length=200)

    def __str__(self):
        return self.car







