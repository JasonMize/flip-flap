from rest_framework import serializers
from .models import *

class FlapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flap
        fields = (
            'id',
            'name',
        )