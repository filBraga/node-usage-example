// Functional ⇒ new keyword

// In legacy code bases this is a very common pattern, so it's worth understanding.

function Wolf(name) {
    this.name = name;
}

Wolf.prototype.howl = function () {
    console.log(this.name + ': awoooooooo');
};

function Dog(name) {
    Wolf.call(this, name + ' the dog');
}

function inherit(proto) {
    function ChainLink() {}
    ChainLink.prototype = proto;
    return new ChainLink();
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function () {
    console.log(this.name + ': woof');
};

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"
