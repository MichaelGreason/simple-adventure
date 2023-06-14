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

    def update(self, instance, validated_data):
        weapon_data = validated_data.pop('weapon', None)

        if weapon_data is not None:
            weapon_serializer = WeaponSerializer(
                instance.weapon, data=weapon_data)
            weapon_serializer.is_valid(raise_exception=True)
            weapon_serializer.save()

        return super().update(instance, validated_data)


class EnemySerializer(serializers.ModelSerializer):
    weapon = WeaponSerializer(read_only=True, many=False)

    class Meta:
        model = Enemy
        fields = '__all__'
