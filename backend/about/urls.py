from django.urls import path
from .views import AboutUsDetailView

urlpatterns = [
    path('', AboutUsDetailView.as_view(), name='about-us-detail'),
]
