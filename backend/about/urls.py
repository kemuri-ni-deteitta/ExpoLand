from django.urls import path
from .views import AboutUsDetailView, PartnerListView, TestimonialListView, CertificateListView, ContactDetailView, RequestCreateView

urlpatterns = [
    path('', AboutUsDetailView.as_view(), name='about-us-detail'),
    path('partners/', PartnerListView.as_view(), name='partner-list'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
    path('certificates/', CertificateListView.as_view(), name='certificate-list'),
    path('contacts/', ContactDetailView.as_view(), name='contact-detail'),
    path('requests/', RequestCreateView.as_view(), name='request-create'),
]
