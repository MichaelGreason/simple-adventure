from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from .models import User, Enemy, Weapon


class CustomUserCreateSerializer(UserCreateSerializer):

    class Meta:
        fields = (
            'username',
            'password',
        )


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class EnemySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enemy
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'
