class Vehicle {
	constructor(make, model, year) {
		if (typeof make !== "string")
			throw new Error("Make should be a string");

		if (typeof model !== "string")
			throw new Error("Model should be a string");

		if (!isFinite(year) || year <= 1900)
			throw new Error("Must enter a valid year");

		this.make = make;
		this.model = model;
		this.year = year;
	}

	honk() {
		return "Beep.";
	}

	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(
	myFirstVehicle.honk(), // "Beep."
	myFirstVehicle.toString() // "The vehicle is a Honda Monster Truck from 1999."
);

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(
	myFirstCar.toString(), // "The vehicle is a Toyota Corolla from 2005."
	myFirstCar.honk(), // "Beep."
	myFirstCar.numWheels // 4
);
class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return "VROOM!!!";
	}
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

console.log(
	myFirstMotorcycle.toString(), // "The vehicle is a Honda Nighthawk from 2000."
	myFirstMotorcycle.honk(), // "Beep."
	myFirstMotorcycle.revEngine(), // "VROOM!!!"
	myFirstMotorcycle.numWheels // 2
);

class Garage {
	constructor(capacity) {
		if (!isFinite(capacity) || capacity <= 0)
			throw new Error("Invalid capacity");

		this.capacity = capacity;
		this.vehicles = [];
	}

	add(vehicle) {
		if (!(vehicle instanceof Vehicle))
			return "Only vehicles are allowed in here!";

		if (this.vehicles.length >= this.capacity) return "Sorry, we’re full.";

		this.vehicles.push(vehicle);
		return "Your vehicle has been added to the garage";
	}
}

let garage = new Garage(2);
console.log(
	garage.vehicles, // []
	garage.add(new Car("Hyundai", "Elantra", 2015)), // "Vehicle added!"
	garage.vehicles, // [Car]
	garage.add("Taco"), // "Only vehicles are allowed in here!"
	garage.add(new Motorcycle("Honda", "Nighthawk", 2000)), // "Vehicle added!"
	garage.vehicles, // [Car, Motorcycle]
	garage.add(new Motorcycle("Honda", "Nighthawk", 2001)) // "Sorry, we're full."
);
