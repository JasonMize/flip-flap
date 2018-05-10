from django.contrib import admin
from .models import *
# Register your models here.

# class HeadInline(admin.TabularInline):
#     extra = 1
#     model = Head

class HeadAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'img',
    )


class FlapAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
    )
    # inlines = (
    #     HeadInline,
    # )

admin.site.register(Flap, FlapAdmin)
admin.site.register(Head, HeadAdmin)