from django.shortcuts import render
from rest_framework import generics
from .models import AboutUs, Partner, Testimonial, Certificate
from .serializers import AboutUsSerializer, PartnerSerializer, TestimonialSerializer, CertificateSerializer

# Create your views here.

class AboutUsDetailView(generics.RetrieveAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

    def get_object(self):
        return AboutUs.objects.first()

class PartnerListView(generics.ListAPIView):
    queryset = Partner.objects.filter(is_active=True)
    serializer_class = PartnerSerializer

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer

class CertificateListView(generics.ListAPIView):
    queryset = Certificate.objects.filter(is_active=True)
    serializer_class = CertificateSerializer
