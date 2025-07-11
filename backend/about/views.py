from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import AboutUs, Partner, Testimonial, Certificate, Contact, Request
from .serializers import AboutUsSerializer, PartnerSerializer, TestimonialSerializer, CertificateSerializer, ContactSerializer, RequestSerializer

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

class ContactDetailView(generics.RetrieveAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_object(self):
        return Contact.objects.filter(is_active=True).first()

class RequestCreateView(generics.CreateAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response({
            'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
            'request_id': serializer.data['id']
        }, status=status.HTTP_201_CREATED)
