from django import forms
from .models import ImagesUpload

class ImagesUploadForm(forms.ModelForm):
    class Meta:
        model = ImagesUpload
        fields = "__all__"