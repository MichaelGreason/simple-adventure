from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(max_length=100, default='player')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    weapon = models.ForeignKey(
        to='Weapon',
        on_delete=models.CASCADE,
        related_name='user',
        blank=True,
        null=True
    )
    skill_points = models.IntegerField(default=0)
    kills = models.IntegerField(default=0)
    deaths = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class Enemy(models.Model):
    name = models.CharField(max_length=100, default='enemy')
    hit_points = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    weapon = models.ForeignKey(
        to='Weapon',
        on_delete=models.CASCADE,
        related_name='enemy',
        blank=True,
        null=True
    )

    class Meta:
        verbose_name_plural = 'enemies'

    def __str__(self):
        return self.name


class Weapon(models.Model):
    name = models.CharField(max_length=100, default='weapon')
    damage = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)

    def __str__(self):
        return self.name
