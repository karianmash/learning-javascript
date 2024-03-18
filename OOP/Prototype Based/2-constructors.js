// Constructors are functions used to create objects with a predefined structure.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("John", "Doe");
console.log("My name is", person1.fullName());