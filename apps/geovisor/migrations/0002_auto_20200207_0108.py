# Generated by Django 2.2 on 2020-02-07 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geovisor', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='luminarias',
            name='latitud',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='luminarias',
            name='longitud',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
