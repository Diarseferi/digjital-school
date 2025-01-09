var button1 = document.getElementById("btn");

/*button1.onclick = function(){
    alert('hello');
}
*/

button1.addEventListener('click',function(){
    alert('hello world')
})

var button2=document.getElementById('btn1');
var button3=document.getElementById('btn2');
var button4=document.getElementById('btn3');
var v_button=document.getElementById('btn4');

button2.onmouseover=function(){
    alert('over')
}

button3.onmouseleave=function(){
    alert('leave')
}

button4.onmousewheel=function(){
    alert('wheel')
}



