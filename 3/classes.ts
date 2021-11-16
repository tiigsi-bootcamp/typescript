class Stranger {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;

		console.log('Constructed an object!');
	}

	introduce() {
		console.log('My name is ' + this._name + ', and my age is ' + this._age);
	}
}

let ali = new Stranger('Ali', 23);
ali.introduce();

const fatima = new Stranger('Fatima', 25);
fatima.introduce();