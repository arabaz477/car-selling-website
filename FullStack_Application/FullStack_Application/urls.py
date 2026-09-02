"""
URL configuration for FullStack_Application project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from webapp.views import (
    StudentListView,
    CarListView,
    CarDetailView,
    LaptopListView,
    MobileListView,
    BookListView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',StudentListView.as_view()),
    path('student/',StudentListView.as_view()),
    path('cars/',CarListView.as_view()),
    path('laptops/',LaptopListView.as_view()),
    path('mobiles/',MobileListView.as_view()),
    path('books/',BookListView.as_view()),
    path('cars/', CarListView.as_view()),
    path('cars/<int:pk>/', CarDetailView.as_view()),
    path('api/jwtDom/',include('jwtDom.urls')),
    path('imgUpload/',include('imgUpload.urls')),


]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()
