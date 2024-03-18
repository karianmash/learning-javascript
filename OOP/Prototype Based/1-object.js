// In JavaScript, everything is an object or behaves like one.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("My name is", person.fullName());