from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField()
    hit_points = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    damage = models.IntegerField()


class Enemy(models.Model):
    name = models.CharField()
    hit_points = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    damage = models.IntegerField()
