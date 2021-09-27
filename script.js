// coding challenge #4

class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} going at ${this.speed} km/h`);

		return this;
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} going at ${this.speed} km/h`);

		return this;
	}
}

class EvCl extends CarCl {
	#charge;

	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	chargeBattery(val) {
		this.#charge = val;
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(
			`${this.make} going at ${this.speed} km/h, with a charge of ${
				this.#charge
			}`
		);

		return this;
	}
}

const rivian = new EvCl("rivian", 120, 20);
// console.log(rivian.#charge);
// rivian.accelerate().accelerate();
rivian.chargeBattery(50);
rivian.accelerate().accelerate().brake();
