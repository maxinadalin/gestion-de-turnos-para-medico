# Generated by Django 5.0.1 on 2024-10-01 17:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctores', '0001_initial'),
        ('especialidades', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctores',
            name='especialidad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='especialidades.especialidades'),
        ),
    ]
