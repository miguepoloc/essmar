from rest_framework import serializers
from apps.geovisor.models import Luminarias


class LuminariasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Luminarias
        fields = ['id', 'nombre_ciudad', 'nombre_barrio', 'codigo_actual', 'nombre_estructura', 'potencia', 'nombre_uso_alumbrado',
                  'x', 'y', 'latitud', 'longitud', 'nombre_tipo_fuente', 'nombre_tipo_luminaria', 'fecha_inventario']
