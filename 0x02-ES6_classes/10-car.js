class Car:
    def __init__(self, brand, motor, color):
        self._brand = brand
        self._motor = motor
        self._color = color

    def clone_car(self):
        return Car(self._brand, self._motor, self._color)


car1 = Car("Tesla", "Electric", "Black")
car2 = car1.clone_car()

print(car1._brand)
print(car2._brand)

# Output:
# Tesla
# Tesla

