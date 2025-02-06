// function printNames(){
// document.write("John Doe");
// document.write("<br>");
// setTimeout(function(){document.write("Ana")}, 2000);
// document.write("bob");
// }
// printNames();

var colors = ['red', 'green', 'blue', 'purple'];
var names = ['John', 'Ana', 'Bob', 'Mark'];


function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)]; 
}


function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}


setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);