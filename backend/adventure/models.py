from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(default='player')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    weapon = models.ManyToManyField(
        to='Weapon', blank=True, related_name='user')


class Enemy(models.Model):
    name = models.CharField(default='enemy')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    weapon = models.ManyToManyField(
        to='Weapon', blank=True, related_name='enemy')

    class Meta:
        verbose_name_plural = 'enemies'


class Weapon(models.Model):
    name = models.CharField(default='weapon')
    damage = models.IntegerField(default=0)
