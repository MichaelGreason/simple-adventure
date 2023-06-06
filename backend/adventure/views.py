# from django.shortcuts import render
import random
from django.db.models import Q
from rest_framework import generics
from .models import User, Enemy, Weapon
from .serializers import UserSerializer, EnemySerializer, WeaponSerializer


class UserProfile(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class Enemies(generics.ListAPIView):
    serializer_class = EnemySerializer
    queryset = Enemy.objects.all()


class Weapons(generics.ListAPIView):
    serializer_class = WeaponSerializer
    queryset = Weapon.objects.all()


class BasicWeapons(generics.ListAPIView):
    serializer_class = WeaponSerializer
    queryset = Weapon.objects.filter(Q(name__contains='Basic'))


def roll_d20():
    roll = random.randint(1, 20)
    return roll


def determine_initiative():
    player_speed = User.speed + User.weapon.speed + roll_d20()
    enemy_speed = Enemy.speed + Enemy.weapon.speed + roll_d20()

    if player_speed > enemy_speed:
        # player attacks first
        pass
    elif player_speed < enemy_speed:
        # enemy attacks first
        pass
    else:
        # roll again
        determine_initiative()


def player_attack():
    pass


def enemy_attack():
    pass
