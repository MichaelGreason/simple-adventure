from rest_framework import serializers
from .models import User, Enemy


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class EnemySerializer(serializers.Modelserializer):

    class Meta:
        model = Enemy
        fields = '__all__'
