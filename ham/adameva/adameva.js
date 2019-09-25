let Apple = function (weight) {
    this.weight = weight;
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.getWeight = function () {
        return this.weight
    }
};

let Human = function (name, gender, weight, said) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.said = said;
    
    this.getName = function () {
        return this.name;
    };
    
    this.setName = function (value) {
        this.name = value;
    };

    this.getGender = function () {
        return this.gender;
    };

    this.setGender = function (value) {
        this.gender = value;
    };

    this.getWeight = function () {
      return this.weight ;
    };

    this.setWeight = function (value) {
        this.weight = value;
    };

    this.getSaid = function () {
        return this.said;
    };

    this.setSaid = function (value) {
        this.said = value;
    };

    this.creaseWeight = function () {
        this.weight++;
    };
    this.checkApple = function () {
        return apple.weight > 0;
    }
};

let adam = new Human('adam','male', 70, 'My name is Adam');
let eva = new Human('Eva','female',40, 'My name is Eva');
let apple = new Apple(10);

function eatApple(name) {
    if (name.checkApple()) {
        name.creaseWeight();
        apple.decrease();
    }

    if (apple.getWeight() <= 0){
        alert("apple is over")
    }
    display();
}

function display() {
    document.getElementById('outputAdam').innerText = 'weight`s Adam is ' + adam.getWeight();
    document.getElementById('outputEva').innerText = 'weight`s Eva is ' + eva.getWeight();
    document.getElementById('outputApple').innerText = 'weight`s Apple is ' + apple.getWeight();

}
display();

