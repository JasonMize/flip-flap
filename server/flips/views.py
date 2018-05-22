from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
import requests

def index(request):
  flap_list = Flap.objects.all()
  context = {
    'flap_list': flap_list
  }

# django rest framework api
def get_flap_list(request):
  # returns Json list of all flaps

  if request.method == "GET":
    flap_list = Flap.objects.all()
    serializer = FlapSerializer(flap_list, many=True)
    return JsonResponse(serializer.data, safe=False)


# external api
def get_ron_quote(request):
  if request.method == "GET":
    data = requests.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    json = data.json()
    return JsonResponse(json, safe=False)