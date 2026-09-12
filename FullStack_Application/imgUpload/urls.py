from django.conf import settings
from django.urls import path,include
from django.conf.urls.static import static
from .views import ImageUploadView
urlpatterns = [
    path("images/",ImageUploadView.as_view()),
]
urlpatterns += static(
    settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

