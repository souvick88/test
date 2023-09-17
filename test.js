// Object creation patters- factory, constructor , prototype
//https://www.youtube.com/watch?v=xizFJHKHdHw

//factory --->
var personFactory = function (name, age, dob) {

    var temp = {};

    temp.name = name;
    temp.age = age;
    temp.dob = dob;

    temp.printPerson = function () {
        console.log("factory funtion" + this.name + this.age + this.dob);
    }

    return temp;
}

var person1 = personFactory('souvick', '27', '12202020');

person1.printPerson();

//constructor pattern ---->

var personConstructor = function (name, age, dob) {

    this.name = name;
    this.age = age;
    this.dob = dob;

    this.printPerson = function () {
        console.log("Constructor pattern" + this.name + this.age + this.dob);
    }
}

var person2 = new personConstructor('souvick', '27', '12202020');

person2.printPerson();


// prototype pattern--->

var peopleProto = function () { };

peopleProto.prototype.name = "no name";
peopleProto.prototype.age = "";
peopleProto.prototype.dob = "";

var person3 = new peopleProto();

console.dir(person3);
