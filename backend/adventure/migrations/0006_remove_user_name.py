# Generated by Django 4.2.1 on 2023-06-09 17:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adventure', '0005_rename_losses_user_deaths_rename_wins_user_kills_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
    ]