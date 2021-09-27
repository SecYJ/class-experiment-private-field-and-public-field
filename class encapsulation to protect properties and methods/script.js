class Account {
	/* 以下介绍的 private / public fields 如果要取得 prop 或 methods 都可以
	 透过 this 的取得
	*/

	// 1. public fields
	// public fields 的 prop 或 methods 都会存在于透过 class 定义的 object
	// 定义 public fields 跟定义 variable 一样不过不需要 const, let
	locale = navigator.language;

	// 2. private fields
	// 经过加密而且在 class 外层是 access 不到这个 #movements
	// 开头必须是 #然后名称, 这里要注意, 在 class 内调用的话前面也要加上 #movements
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;

		console.log(`Thank you for creating an account, ${owner}`);
	}

	// public methods
	deposit(value) {
		if (typeof value !== "number")
			return alert(`${value} is not valid number`);
		return this.#movements.push(value);
	}

	withdraw(value) {
		this.deposit(-value);
	}

	// approveLoan(value) {
	// return true;
	// }

	requestLoan(value) {
		// if (!this.#approveLoan(value)) console.log(`Sorry loan failed`);
		// return this.deposit(value);
		if (!this.#approveLoan(value)) {
			console.log("hello");
		}

		console.log(!this.#approveLoan(100));
	}

	// private methods start
	#approveLoan(value) {
		return true;
	}
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1.deposit(500);
acc1.requestLoan(500);
