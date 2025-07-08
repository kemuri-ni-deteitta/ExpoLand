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