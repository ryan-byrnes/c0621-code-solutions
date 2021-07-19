function ExampleConstructor() {

}

console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newObject = new ExampleConstructor();

console.log('ExampleConstructor call:', newObject);

var instanceOfExampleConstructor = newObject instanceof ExampleConstructor;

console.log('instanceof:', instanceOfExampleConstructor);
