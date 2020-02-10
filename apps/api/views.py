from django.shortcuts import render
from rest_framework import viewsets
from apps.api.serializers import LuminariasSerializer
from apps.geovisor.models import Luminarias


class LuminariasViewSet(viewsets.ModelViewSet):
    """
    API endpoint de las semanas
    """
    queryset = Luminarias.objects.all().order_by('id')
    serializer_class = LuminariasSerializer
