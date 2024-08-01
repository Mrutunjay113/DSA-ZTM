const string = ["a", "b", "c", "d"];
//  0   1    2    3
//4*4 = 16 bytes of storage

//push
string.push("e");
console.log(string); //["a", "b", "c", "d", "e"]

//pop
string.pop();
console.log(string); //["a", "b", "c"]
 
//unshift
string.unshift("x"); //O(n) 
console.log(string); //["x", "a", "b", "c", "d"]

//splice
string.splice(2, 0, "alien"); //O(n/2) => O(n)
console.log(string); //["x", "a", "alien", "b", "c", "d"]

//basics

//reference type
let object1 = { value: 10 };
let object2 = object1; //reference type
let object3 = { value: 10 };

object1 === object2; //true
object1 === object3; //false
object1.value = 15;
console.log(object1.value); //15
console.log(object2.value); //15

//context vs scope

const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a(); //object4 {a: f}
//instantiation

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi i am ${this.name}, i'm of ${this.type} type`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}
const Wizard1 = new Wizard("Shelly", "Healer"); //player Wizard {name: "Shelly", type: "Healer"}
Wizard1.play(); //WEEEEEE I'm a Healer
Wizard1.introduce(); //hi i am Shell, i'm of Healer type
