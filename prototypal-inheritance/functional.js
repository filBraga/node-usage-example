// Functional ⇒ Object.create

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#with_object.create

// You may also see some legacy code using Object.create() to build the inheritance chain. However, because this reassigns the prototype property and removes the constructor property, it can be more error-prone, while performance gains may not be apparent if the constructors haven't created any instances yet.

// The Object.create function can take two arguments. The first argument is the desired prototype of the object being created.
// The second argument of Object.create is an optional Properties Descriptor object.

const animal = {
    eat: function () {
        console.log(this.name + ': eats!');
    },
};

const dog = Object.create(animal, {
    bark: {
        value: function () {
            console.log(this.name + ': woof');
        },
    },
});

const ash = Object.create(dog, {
    name: { value: 'Ash the dog' },
});

ash.eat();
ash.bark();
