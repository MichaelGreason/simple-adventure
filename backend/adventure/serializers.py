from rest_framework import serializers
from .models import User, Enemy, Weapon


class WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Weapon
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    weapon_name = serializers.SerializerMethodField()
    weapon_damage = serializers.SerializerMethodField()
    weapon_attack = serializers.SerializerMethodField()
    weapon_defense = serializers.SerializerMethodField()
    weapon_speed = serializers.SerializerMethodField()

    def get_weapon_name(self, obj):
        return obj.weapon.name

    def get_weapon_damage(self, obj):
        return obj.weapon.damage

    def get_weapon_attack(self, obj):
        return obj.weapon.attack

    def get_weapon_defense(self, obj):
        return obj.weapon.defense

    def get_weapon_speed(self, obj):
        return obj.weapon.speed

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
            'weapon_name',
            'weapon_damage',
            'weapon_attack',
            'weapon_defense',
            'weapon_speed',
            'skill_points',
            'kills',
            'deaths',
        )


class EnemySerializer(serializers.ModelSerializer):
    weapon = WeaponSerializer(read_only=True, many=False)

    class Meta:
        model = Enemy
        fields = '__all__'
