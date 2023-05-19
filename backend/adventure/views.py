# from django.shortcuts import render
import random
from rest_framework import generics
from .models import User, Enemy, Weapon
from .serializers import UserSerializer, EnemySerializer, WeaponSerializer


class UserProfile(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


def player_roll_d20():
    player_roll = random.randint(1, 20)
    return player_roll


def enemy_roll_d20():
    enemy_roll = random.randint(1, 20)
    return enemy_roll


def determine_initiative():
    # player_roll_d20() == player_roll
    # player_speed = player_roll + User.speed
    player_speed = User.speed + player_roll_d20()

    # enemy_roll_d20() == enemy_roll
    # enemy_speed = enemy_roll + Enemy.speed
    enemy_speed = Enemy.speed + enemy_roll_d20()

    if player_speed > enemy_speed:
        pass
    elif player_speed < enemy_speed:
        pass
    else:
        determine_initiative()
