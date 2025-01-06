/** JavaScript Objects

An Objects ins JS is a collection of properties, where each property has a key (name) and a value. Think of it as a way to group
related data and functions together.

Below is how you can create a basic object in JS.
**/

let person = {
  name: "John", // Property: key is 'name'. value is 'John'
  age: 25, //  Property: key is 'age', value is 25
  greet: function () {
    // Method: A function inside an object
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person.name); // accessing properties
console.log(person.age);

person.greet(); // Output: Hello, my name is John

/**
 * What are classes?
    * A class is a blueprint for creating objects. Instead of manually writing each object, you can use a class to define a structure 
      and then create multiple objects (instances) from it.  
 */

// defining a class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is ${this.name}");
  }
}
