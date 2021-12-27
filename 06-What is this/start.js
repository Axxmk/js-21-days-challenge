// function printName() {
// 	console.log(this);
// 	console.log(`My name is ${this.name}`);
// }

// 2.1 Invoker object
// const Ann = {
// 	name: 'Ann',
// 	printName
// };
// const Joy = {
// 	name: 'Joy',
// 	printName
// };

// Ann.printName();  // this = object ก็คือ print Ann ทั้งก้อน

// 2.2 Global object (window, global)
// name = 'Global';
// printName();

// constructor function
// function Person(name) {
// 	this.name = name;
// 	this.printName = printName;
// }

// const Ann = new Person('Ann');
// Ann.printName();

// 3. call(), apply(), bind()
function printName(nationality, city) {
	console.log(this);
	console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
}

function Person(name, nationality, city) {
	this.name = name;
	this.nationality = nationality;
	this.city = city;

	printName(this.nationality, this.city);  // this เฉยๆ จะกลายเป็นของ window

	printName.call(this, this.nationality, this.city);
	printName.apply(this, [this.nationality, this.city]);

	const printAnn = printName.bind(this);
	printAnn(this.nationality, this.city);
}

const Ann = new Person('Ann', 'Thai', 'Bangkok');