/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: If "this" keyword is used in the global scope, "this" will refer to the window/console object.
* 2. Implicit binding: If "this" keyword is used in a function of an object, the "this" keyword will refer to the object instance. This will allow the programmer to use the same function with different objects.
* 3. New binding: If "this" keyword is used in a constructor of an object, it refers to the specific instance created by the constructor function.
* 4. Explicit binding: If "this" keyword is used with Javascript's call or apply method, it is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const anObj = {
    name: "Ali",
    sayHello: function(){
        console.log ("Hello " + this.name);
    }
}

anObj.sayHello();

// Principle 3

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function(){
        console.log ("I'm " + this.name + " and I'm " + this.age + " years old.");
    }
}

const ali = new Person("Ali", "32");
ali.speak();

// Principle 4

const sam = new Person("Sam", "28");
ali.speak.call(sam);
sam.speak.apply(ali);