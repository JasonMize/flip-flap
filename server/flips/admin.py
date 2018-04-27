from django.contrib import admin
from .models import *
# Register your models here.


class FlapAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
    )