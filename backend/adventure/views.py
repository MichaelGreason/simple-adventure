# from django.shortcuts import render
from django.contrib.auth.models import User, Enemy
from rest_framework import generics
import random


def player_roll_d20():
    player_roll = random.randint(1, 20)
    return player_roll


def enemy_roll_d20():
    enemy_roll = random.randint(1, 20)
    return enemy_roll


def determine_initiative(player_roll_d20, enemy_roll_d20):
    pass
