from django.shortcuts import render
from django.contrib import messages
from .forms import ImagesUploadForm
from .models import ImagesUpload


def images(request):
    if request.method == "POST":
        fm = ImagesUploadForm(request.POST)
        if fm.is_valid():
            fm.save()
            messages.success(request, "Image Successfully Uploaded")
            # return redirect("/")

    else:
        fm = ImagesUploadForm()
    img = ImagesUpload.objects.all()
    return render(request, "images.html", {"img": img, "fm": fm})