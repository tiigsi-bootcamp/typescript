let personName = 'Ali Ahmed';

const valueContainsA = personName.includes('A');
console.log('Name contains A', valueContainsA);

const nameStartsWithA = personName.startsWith('Ali');
console.log('Name starts with A', nameStartsWithA);

const nameEndsWithA = personName.endsWith('d');
console.log('Name ends with d', nameEndsWithA);

const firstFiveChars = personName.substring(0, 5);
console.log('First five chars', firstFiveChars);

const parts = personName.split(' ');
console.log('Name parts', parts);

const firstName = parts[0];
console.log('First name', firstName);
