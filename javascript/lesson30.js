// var x=5;
// if (x > 2){
//     console.log("the value of x is greater than 2");
// }else(x<2){
//     console.log("the value of x is lower than 2 ")
// }


// var input=document.getElementById("input_id")
// var button=document.getElementById("btn_id")
// var text=document.getElementById("text_id")

// button.onclick=function(){
//     text.innerHTML=input.value
// }

// var input=document.getElementById("input");
// var btn=document.getElementById("btn");
// var h1=document.getElementById("h1");


// btn.onclick=function(){
//     if(input.value >10){
//         h1.innerHTML="input value is greater than 10";
//     }else if(input.vlaue<10){
//         h1.innerHTML="input value is less than 10"
//     }else{
//         h1.innerHTML="input value is equal to 10"
//     }
// }

function showCurrentTime(){
    var clock= document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    // if(hours >= noon){
    //     meridian = "PM";
    // }

    var clockTime = hours + ":" + minutes + ":" + seconds + "" + meridian;
    clock.innerText = clockTime;
}

function changeImage(){
    var time = new Date().getHours();
    console.log(time);
}


// var oneSecond = 1000;
// setInterval(showCurrentTime, oneSecond)