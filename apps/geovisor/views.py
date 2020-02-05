from django.shortcuts import render

def geovisor(request):
    return render(request, 'geovisor/main.html')