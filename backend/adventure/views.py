# from django.shortcuts import render
from django.contrib.auth.models import User, Enemy
from rest_framework import generics
import random


def roll_d20():
    roll = random.randint(1, 20)
    return roll
