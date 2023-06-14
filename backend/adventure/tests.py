from django.test import TestCase
from .models import User, Enemy, Weapon
from .views import roll_d20, player_attack, enemy_attack, determine_initiative


# Fetch user, enemy, and weapon instances for testing
user = User.objects.get(id=1)  # Replace <user_id> with the actual user ID
enemy = Enemy.objects.get(id=1)  # Replace <enemy_id> with the actual enemy ID


attack_result = player_attack(user, enemy)
print("Player attack result:", attack_result)

# enemy_attack_result = enemy_attack(user, enemy)
# print("Enemy attack result:", enemy_attack_result)

# initiative_result = determine_initiative(user, enemy)
# print("Initiative result:", initiative_result)
