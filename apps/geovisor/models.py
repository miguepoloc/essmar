from django.db import models


class Luminarias(models.Model):
    id = models.IntegerField(primary_key=True)
    nombre_ciudad = models.CharField(max_length=200)
    nombre_barrio = models.CharField(max_length=200)
    codigo_actual = models.CharField(max_length=200, blank=True, null=True)
    nombre_estructura = models.CharField(max_length=200)
    potencia = models.IntegerField()
    nombre_uso_alumbrado = models.CharField(max_length=200)
    x = models.CharField(max_length=200)
    y = models.CharField(max_length=200)
    latitud = models.CharField(max_length=200, blank=True, null=True)
    longitud = models.CharField(max_length=200, blank=True, null=True)
    nombre_tipo_fuente = models.CharField(max_length=200)
    nombre_tipo_luminaria = models.CharField(max_length=200)
    fecha_inventario = models.DateTimeField()

    def __str__(self):
        return self.nombre_ciudad
