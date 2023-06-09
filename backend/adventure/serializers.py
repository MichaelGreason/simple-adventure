from rest_framework import serializers
from .models import User, Enemy, Weapon


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'username',
            'name',
            'hit_points',
            'attack',
            'defense',
            'speed',
            'weapon',
            'skill_points',
            'kills',
            'deaths',
        )


class EnemySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enemy
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'
