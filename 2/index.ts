// Classes
class Person {
	name: string;
	age: number;

	talk() {
		console.log('I talk all day long!!!');
	};

	walk() {
		console.log('I walk everyday!');
	};
};

// obj.introduce()
// => Magacaygu waa obj.name da'daydu waa obj.age.

const person1: Person = new Person();
person1.name = 'Ahmed';
person1.age = 22;

person1.talk();
person1.walk();

console.log('Person is', person1);

const people: Person[] = [];

people[0] = new Person();
people[0].name = 'Jama';
people[0].age = 26;

console.log('List of people is:', people);