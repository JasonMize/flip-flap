from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt


def index(request):
  flap_list = Flap.objects.all()
  context = {
    'flap_list': flap_list
  }

# rest api end point
def get_flap_list(request)
  # returns Json list of all flaps

  if request.method == "GET":
    flap_list = Flap.objects.all()
    serializer = FlapSerializer(flap_list, many=True)
    return JsonResponse(serializer.data, safe=False)


