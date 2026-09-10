from rest_framework.generics import ListCreateAPIView
from .models import ImageUpload
from .serializers import ImageUploadSerializer

class ImageUploadView(ListCreateAPIView):
    queryset = ImageUpload.objects.all()
    serializer_class = ImageUploadSerializer