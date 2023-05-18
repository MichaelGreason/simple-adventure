from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(default='Player')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    damage = models.IntegerField(default=0)


class Enemy(models.Model):
    name = models.CharField(default='Enemy')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    damage = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = 'enemies'
