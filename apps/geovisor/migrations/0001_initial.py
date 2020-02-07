# Generated by Django 2.2 on 2020-02-07 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Luminarias',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_ciudad', models.CharField(max_length=200)),
                ('nombre_barrio', models.CharField(max_length=200)),
                ('codigo_actual', models.CharField(blank=True, max_length=200, null=True)),
                ('nombre_estructura', models.CharField(max_length=200)),
                ('potencia', models.IntegerField()),
                ('nombre_uso_alumbrado', models.CharField(max_length=200)),
                ('x', models.CharField(max_length=200)),
                ('y', models.CharField(max_length=200)),
                ('latitud', models.CharField(max_length=200)),
                ('longitud', models.CharField(max_length=200)),
                ('nombre_tipo_fuente', models.CharField(max_length=200)),
                ('nombre_tipo_luminaria', models.CharField(max_length=200)),
                ('fecha_inventario', models.DateTimeField()),
            ],
        ),
    ]
