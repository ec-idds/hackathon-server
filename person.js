class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    callBack() {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

module.exports = Person;