class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;

		console.log(`Thank you for creating an account, ${owner}`);
	}

	deposit(value) {
		if (typeof value !== "number")
			return alert(`${value} is not valid number`);
		return this.movements.push(value);
	}

	withdraw(value) {
		this.deposit(-value);
	}

	approveLoan(value) {
		return true;
	}

	requestLoan(value) {
		if (!this.approveLoan) console.log(`Sorry loan failed`);
		return this.deposit(value);
	}
}

const acc1 = new Account("Jonas", "EUR", 1111);
// acc1.deposit(1000);
// acc1.withdraw(500);

acc1.approveLoan(false);
acc1.requestLoan(500);
console.log(acc1);
