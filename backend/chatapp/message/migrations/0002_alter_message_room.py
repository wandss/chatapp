# Generated by Django 3.2.2 on 2021-05-09 01:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0001_initial'),
        ('message', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='room',
            field=models.ManyToManyField(related_name='messages', to='room.Room'),
        ),
    ]