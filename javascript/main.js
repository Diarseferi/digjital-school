//console("hello world")

// var b=20;
// var c=30;
// var D= b * c;
// var d=40;
// console.log(D);


/*var a=50;


console.log(a)

var x=20;
x+=30;
console.log(x)

var y=50;
y-=20;
console.log(y)

var c=5;
var d=5;
console.log(c == d)

var Firstname='Ylberije';
var Lastname='Gruja e Diarit'
var Fullname=Firstname+' '+Lastname;
console.log(Fullname)

var age=14;
console.log(age=14 && <=65 );

var var 1=14;
var var 2=65;
console.log(var1 =14; || var2 =60);*/


function showMessage(){

    alert("This message is inside the function");
}

showMessage();

function sum(number1,number2){
  return number1 + number2;
}
console.log(sum(25,5));


function toCelsius(f){

    return (5/9) * (f-32);
}

console.log("54 fahrenheit is equal to" + toCelsius(54) +"celsius.");


function toSeconds(minutes){
    return minutes * 60;
}
console.log("1 minute is equal to" + toSeconds(60)+ "seconds.");

function triangleArea(baseLength,height){
    return 0.5 * baseLength * height;
}

console.log(triangleArea(5,7));


function dsFunction(){

    var localVar= "Digital School";
    alert(localVar);
}

dsFunction();

// alert(localVar);

//Arrow Function

var arrowFunction = () => alert("Hello world");

arrowFunction();

var arrowFunction = name => alert(`Hello ${name}`);
arrowFunction("John Doe");

//Objects

var car ={
    name:"Mercedes",
    color:"red",
    year:2020,
    kilometers:0,
    startEngine: function(){
        alert("Vroommmmmm");
    },
    get getKilometers(){
        return this.kilometers;
    },

    set setKilometers(km){
        this.kilometers = km;
    }
}

console.log(car.getKilometers);

car.setKilometers = 100;

console.log(car.getKilometers);


var compjuter = new Object();

compjuter.name = "Lenovo";
compjuter.CPU = "Intel core i7";
compjuter.RAM = "16 GB";
compjuter.GPU="GeForce GT730 2GB Dual DP HP";

compjuter.type = function(){

    return this.name + "," + this.CPU + "," + this.RAM + "," + this.GPU;
}

alert(computer.CPU);
alert(compjuter.type());


function Compjuter(name, CPU,RAM,GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var compjuter1 = new Compjuter("macBook","M1 8-CORE","8GB","Intel");

var compjuter2 = new Compjuter("Acer","Intel core i3","4GB","Intel");
