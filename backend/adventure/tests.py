from django.test import TestCase
from .models import User, Enemy, Weapon
from .views import roll_d20, player_attack


class GameplayTestCase(TestCase):
    def setUp(self):
        # Create test instances of User, Enemy, and Weapon
        self.user = User.objects.create(username='test_user', attack=10)
        self.enemy = Enemy.objects.create(name='test_enemy', defense=5)
        self.weapon = Weapon.objects.create(name='test_weapon', damage=8)

        # Assign the weapon to the user and enemy
        self.user.weapon = self.weapon
        self.user.save()
        self.enemy.weapon = self.weapon
        self.enemy.save()

    def test_player_attack(self):
        # Call the player_attack function
        attack_result = player_attack(self.user, self.enemy)

        # Assert the expected outcome based on your game logic
        self.assertEqual(attack_result, expected_result)


# Execute the tests
if __name__ == '__main__':
    unittest.main()
