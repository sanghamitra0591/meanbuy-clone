let imglink=[
    "./Images/sliderb2b_1.jpeg",
    "./Images/sliderb2b_2.jpeg",
    "./Images/sliderb2b_3.jpeg",
    "./Images/sliderb2b_2.jpeg",
]
document.getElementById("mean").addEventListener("click",function(){
    window.location.assign("./index.html")
})
let leftb=document.getElementById("leftb");
let rightb=document.getElementById("rightb");
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let num4=document.getElementById("num4");
let crauser=document.getElementById("crauser");
let imgnum=0;
if(imgnum===0){
    num1.style.backgroundColor="orangered";
}
rightb.addEventListener("click",function(){
    imgnum++;
    if(imgnum===0){
        num1.style.backgroundColor="orangered";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }
    else if(imgnum===1){
        num2.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }else if(imgnum===2){
        num3.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }else if(imgnum===3){
        num4.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }
    if(imgnum===imglink.length){
        imgnum=0;
        if(imgnum===0){
            num1.style.backgroundColor="orangered";
            num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
            num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
            num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        }
    }
    crauser.src=imglink[imgnum];
})
leftb.addEventListener("click",function(){
    imgnum--;
    if(imgnum===0){
        num1.style.backgroundColor="orangered";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }
    else if(imgnum===1){
        num2.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }else if(imgnum===2){
        num3.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }else if(imgnum===3){
        num4.style.backgroundColor="orangered";
        num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    }
    if(imgnum<0){
        imgnum=imglink.length-1;
        if(imgnum===imglink.length-1){
            num4.style.backgroundColor="orangered";
            num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
            num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
            num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
        }
    }
    crauser.src=imglink[imgnum];
})
num1.addEventListener("click",function(){
    crauser.src=imglink[0];
    imgnum=0;
    num1.style.backgroundColor="orangered";
    num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
})
num2.addEventListener("click",function(){
    crauser.src=imglink[1];
    imgnum=1;
    num2.style.backgroundColor="orangered";
    num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
})
num3.addEventListener("click",function(){
    crauser.src=imglink[2];
    imgnum=2;
    num3.style.backgroundColor="orangered";
    num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num4.style.backgroundColor="rgba(128, 128, 128, 0.671)";
})
num4.addEventListener("click",function(){
    crauser.src=imglink[3];
    imgnum=3;
    num4.style.backgroundColor="orangered";
    num2.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num3.style.backgroundColor="rgba(128, 128, 128, 0.671)";
    num1.style.backgroundColor="rgba(128, 128, 128, 0.671)";
})


let logo=document.querySelector("#wplogo");
logo.addEventListener("click",function(){
    window.location.assign("./wp.html");
})

document.querySelector("#logb").addEventListener("click",function(){
    window.location.assign("./login.html")
});
document.querySelector("#signb").addEventListener("click",function(){
    window.location.assign("./signup.html")
})
document.querySelector("#mean").addEventListener("click",function(){
    window.location.assign("./index.html")
})
