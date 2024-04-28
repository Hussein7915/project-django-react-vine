from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def homeViewset(request):
    return HttpResponse("Hello Wrold")