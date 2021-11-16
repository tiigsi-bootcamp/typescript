// Working with arrays for real!

const customers = ['Ahmed', 'Aisha', 'Sara', 'Ibrahim', 'John', 'Ali'];
console.table(customers);

let tempCustomers: string[] = [];
for (const customer of customers) {
	if (customer.length <= 4) {
		tempCustomers.push(customer);
	}
}

console.log('List of customers with a name less than or equal 4');
console.table(tempCustomers);

const requiredList = customers.filter(function(customer) {
	return customer.length <= 4;
});

console.table(requiredList);

const optimizedCode = customers.filter(c => c.length <= 4);
console.table(optimizedCode);
