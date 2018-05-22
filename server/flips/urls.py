from django.conf.urls import url

from . import views

app_name = "flips"
urlpatterns = [
    url(r'^list/$', views.get_flap_list, name='get_flap_list'),
    url(r'^ron_quote/$', views.get_ron_quote, name='get_ron_quote'),
]
