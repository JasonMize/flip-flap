from django.db import models

# Create your models here.

class Head (models.Model):
    img = models.ImageField(upload_to='heads/', null=True, blank=True)
    
    def __str__ (self):
        return self.img.name

class Flap (models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    head = models.ForeignKey(Head, related_name='flaps', on_delete=models.CASCADE, null=True)



