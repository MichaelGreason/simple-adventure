# from django.shortcuts import render
import random
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


def roll_d20():
    roll = random.randint(1, 20)
    return roll


def determine_initiative():
    player_speed = User.speed + User.weapon.speed + roll_d20()
    enemy_speed = Enemy.speed + Enemy.weapon.speed + roll_d20()

    if player_speed > enemy_speed:
        pass
    elif player_speed < enemy_speed:
        pass
    else:
        determine_initiative()
