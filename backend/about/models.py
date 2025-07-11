from django.db import models

class AboutUs(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='about/', blank=True, null=True)

    def __str__(self):
        return self.title

class Partner(models.Model):
    name = models.CharField(max_length=200, verbose_name='Company Name')
    logo = models.ImageField(upload_to='partners/', verbose_name='Company Logo')
    website = models.URLField(blank=True, null=True, verbose_name='Website')
    description = models.TextField(blank=True, null=True, verbose_name='Description')
    is_active = models.BooleanField(default=True, verbose_name='Is Active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Partner'
        verbose_name_plural = 'Partners'
        ordering = ['name']

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    company_name = models.CharField(max_length=200, verbose_name='Company Name')
    letter_image = models.ImageField(upload_to='testimonials/', verbose_name='Letter Image')
    text_content = models.TextField(verbose_name='Letter Text')
    is_active = models.BooleanField(default=True, verbose_name='Is Active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
        ordering = ['-created_at']

    def __str__(self):
        return f'Letter from {self.company_name}'

class Certificate(models.Model):
    title = models.CharField(max_length=200, verbose_name='Certificate Title')
    certificate_image = models.ImageField(upload_to='certificates/', verbose_name='Certificate Image')
    is_active = models.BooleanField(default=True, verbose_name='Is Active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Certificate'
        verbose_name_plural = 'Certificates'
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class Contact(models.Model):
    # Company Information
    title = models.CharField(max_length=200, default='Контакты', verbose_name='Page Title')
    subtitle = models.CharField(max_length=300, default='Свяжитесь с нами любым удобным способом', verbose_name='Page Subtitle')
    
    # Contact Details
    phone = models.CharField(max_length=20, default='+7 (495) 025-25-01', verbose_name='Phone Number')
    email = models.EmailField(default='info@expoland.ru', verbose_name='Email Address')
    address = models.CharField(max_length=300, default='Москва, улица Кульнева, 3с1', verbose_name='Office Address')
    
    # Working Hours
    working_hours_weekdays = models.CharField(max_length=100, default='9:00 - 18:00', verbose_name='Working Hours (Mon-Fri)')
    working_hours_saturday = models.CharField(max_length=100, default='10:00 - 16:00', verbose_name='Working Hours (Saturday)')
    working_hours_sunday = models.CharField(max_length=100, default='Выходной', verbose_name='Working Hours (Sunday)')
    
    # Map Settings
    map_latitude = models.DecimalField(max_digits=10, decimal_places=6, default=55.742711, verbose_name='Map Latitude')
    map_longitude = models.DecimalField(max_digits=10, decimal_places=6, default=37.523106, verbose_name='Map Longitude')
    map_zoom = models.IntegerField(default=15, verbose_name='Map Zoom Level')
    
    # Additional Information
    description = models.TextField(blank=True, null=True, default='Мы всегда готовы ответить на ваши вопросы и помочь с выбором услуг. Звоните или пишите нам!', verbose_name='Additional Description')
    
    # Social Links
    whatsapp_link = models.URLField(blank=True, null=True, verbose_name='WhatsApp Link')
    telegram_link = models.URLField(blank=True, null=True, verbose_name='Telegram Link')
    vk_link = models.URLField(blank=True, null=True, verbose_name='VK Link')
    
    # Settings
    is_active = models.BooleanField(default=True, verbose_name='Is Active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Contact Information'
        verbose_name_plural = 'Contact Information'
        ordering = ['-created_at']

    def __str__(self):
        return f'Contact Information - {self.title}'

class Request(models.Model):
    SERVICE_CHOICES = [
        ('exhibition_stands', 'Выставочные стенды'),
        ('interior_design', 'Дизайн интерьера'),
        ('outdoor_advertising', 'Наружная реклама'),
        ('consultation', 'Консультация'),
        ('other', 'Другое'),
    ]
    
    STATUS_CHOICES = [
        ('new', 'Новая'),
        ('in_progress', 'В работе'),
        ('completed', 'Завершена'),
        ('cancelled', 'Отменена'),
    ]
    
    # Contact Information
    name = models.CharField(max_length=100, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name='Телефон')
    company = models.CharField(max_length=200, blank=True, null=True, verbose_name='Компания')
    
    # Request Details
    service_type = models.CharField(max_length=50, choices=SERVICE_CHOICES, default='consultation', verbose_name='Тип услуги')
    subject = models.CharField(max_length=200, verbose_name='Тема заявки')
    message = models.TextField(verbose_name='Сообщение')
    
    # Additional Information
    budget = models.CharField(max_length=100, blank=True, null=True, verbose_name='Бюджет')
    deadline = models.DateField(blank=True, null=True, verbose_name='Желаемый срок')
    
    # Status and Management
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new', verbose_name='Статус')
    admin_notes = models.TextField(blank=True, null=True, verbose_name='Заметки администратора')
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    
    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
        ordering = ['-created_at']
        
    def __str__(self):
        return f'{self.name} - {self.get_service_type_display()} ({self.created_at.strftime("%d.%m.%Y")})'