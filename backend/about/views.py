from django.shortcuts import render
from rest_framework import generics
from .models import AboutUs
from .serializers import AboutUsSerializer

# Create your views here.

class AboutUsDetailView(generics.RetrieveAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

    def get_object(self):
        return AboutUs.objects.first()
