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


class Users(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


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


def player_attack(request, enemy):
    player = request.user
    player_weapon = player.weapon
    enemy_weapon = enemy.weapon
    player_attack = player.attack + player_weapon.attack + roll_d20()
    enemy_defense = enemy.defense + enemy_weapon.defense

    if player_attack > enemy_defense:
        enemy.hit_points -= player_weapon.damage
    return enemy


def enemy_attack(user, enemy):
    weapon = enemy.weapon
    if weapon:
        enemy_attack = Enemy.attack + Enemy.weapon.attack + roll_d20()
        player_defense = User.defense + User.weapon.defense
        if enemy_attack > player_defense:
            User.hit_points -= Enemy.weapon.damage


def determine_initiative(request, enemy_id):
    player = request.user
    player_speed = player.speed + player.weapon.speed + roll_d20()

    enemy = Enemy.objects.get(id=enemy_id)
    enemy_speed = enemy.speed + enemy.weapon.speed + roll_d20()

    if player_speed > enemy_speed:
        # player attacks first
        pass
    elif player_speed < enemy_speed:
        # enemy attacks first
        pass
    else:
        # roll again
        determine_initiative(request, enemy_id)
