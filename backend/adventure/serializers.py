from rest_framework import serializers
from .models import User, Enemy, Weapon


class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    weapon = WeaponSerializer(read_only=False, many=False)

    class Meta:
        model = User
        fields = (
            'id',
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
    weapon = WeaponSerializer(read_only=True, many=False)

    class Meta:
        model = Enemy
        fields = '__all__'
