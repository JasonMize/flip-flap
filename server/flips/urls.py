from django.conf.urls import url

from . import views

app_name = "flips"
urlpatterns = [
    url(r'^list/$', views.get_flap_list, name='get_flap_list'),
]
