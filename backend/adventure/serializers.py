from rest_framework import serializers
from .models import User, Enemy, Weapon


class EnemySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enemy
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    weapon = WeaponSerializer(read_only=True, many=False)

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
        # fields = '__all__'
