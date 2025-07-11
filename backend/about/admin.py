from django.contrib import admin
from .models import AboutUs, Partner, Testimonial, Certificate, Contact, Request

# Register your models here.
admin.site.register(AboutUs)

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name']
    list_editable = ['is_active']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'logo')
        }),
        ('Settings', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['company_name', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['company_name', 'text_content']
    list_editable = ['is_active']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('company_name', 'letter_image', 'text_content')
        }),
        ('Settings', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title']
    list_editable = ['is_active']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'certificate_image')
        }),
        ('Settings', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['title', 'phone', 'email', 'is_active', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'phone', 'email', 'address']
    list_editable = ['is_active']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Page Information', {
            'fields': ('title', 'subtitle', 'description')
        }),
        ('Contact Details', {
            'fields': ('phone', 'email', 'address')
        }),
        ('Working Hours', {
            'fields': ('working_hours_weekdays', 'working_hours_saturday', 'working_hours_sunday')
        }),
        ('Map Settings', {
            'fields': ('map_latitude', 'map_longitude', 'map_zoom')
        }),
        ('Social Links', {
            'fields': ('whatsapp_link', 'telegram_link', 'vk_link'),
            'classes': ('collapse',)
        }),
        ('Settings', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service_type', 'subject', 'status', 'created_at']
    list_filter = ['status', 'service_type', 'created_at']
    search_fields = ['name', 'email', 'phone', 'company', 'subject']
    list_editable = ['status']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Контактная информация', {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ('Детали заявки', {
            'fields': ('service_type', 'subject', 'message', 'budget', 'deadline')
        }),
        ('Управление', {
            'fields': ('status', 'admin_notes')
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def has_add_permission(self, request):
        # Usually requests are created through the frontend form
        return False
