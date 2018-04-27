from django.db import models

# Create your models here.

class Head (models.Model):
    img = models.ImageField(upload_to='heads/', null=True, blank=True)


class Flap (models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    head = models.ManyToManyField(Head)



