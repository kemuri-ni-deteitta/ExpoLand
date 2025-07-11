from rest_framework import serializers
from .models import AboutUs, Partner, Testimonial, Certificate, Contact, Request

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['id', 'title', 'content', 'image']

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ['id', 'name', 'logo', 'is_active']

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'company_name', 'letter_image', 'text_content', 'is_active']

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'title', 'certificate_image', 'is_active']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id', 'title', 'subtitle', 'phone', 'email', 'address',
            'working_hours_weekdays', 'working_hours_saturday', 'working_hours_sunday',
            'map_latitude', 'map_longitude', 'map_zoom', 'description',
            'whatsapp_link', 'telegram_link', 'vk_link', 'is_active'
        ]

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = [
            'id', 'name', 'email', 'phone', 'company', 'service_type', 
            'subject', 'message', 'budget', 'deadline', 'status', 'created_at'
        ]
        read_only_fields = ['id', 'status', 'created_at']
        
    def validate_email(self, value):
        """Validate email format"""
        if not value:
            raise serializers.ValidationError("Email is required")
        return value.lower()
        
    def validate_phone(self, value):
        """Basic phone validation"""
        if not value:
            raise serializers.ValidationError("Phone number is required")
        return value
