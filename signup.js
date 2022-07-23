document.querySelector("#logb").addEventListener("click",function(){
    window.location.assign("./login.html")
});
document.querySelector("#signb").addEventListener("click",function(){
    window.location.assign("./signup.html")
})
document.querySelector("#mean").addEventListener("click",function(){
    window.location.assign("./index.html")
})
document.querySelector("#mainpage").addEventListener("click",function(){
    window.location.assign("./index.html")
})
document.querySelector("#cartt").addEventListener("click",function(){
    window.location.assign("./cart.html")
})

let form=document.querySelector("form");
form.addEventListener("submit",storedata);
let signarr=JSON.parse(localStorage.getItem("signdata")) || [];
function storedata(event){
    event.preventDefault();
    let signobj={
        mail:form.mail.value,
        pass:form.password.value,
        cpass:form.cpassword.value,
    }
    if(form.mail.value===""){
        document.getElementById("nomail").innerText="The Email field is required."
    }
    if(form.password.value===""){
        document.getElementById("nopass").innerText="The Password field is required."
    }
    if( form.mail.value!=="" && form.password.value!=="" && form.cpassword.value!=="" && form.password.value==form.cpassword.value){
        signarr.push(signobj);
        localStorage.setItem("signdata",JSON.stringify(signarr));
        window.location.assign("./aftersignup.html")
    }
}

function displaymatch(){
    let flag=document.getElementById("flag");
    flag.innerText="Passwords Match";
    flag.stylr.color="green"
}
function displaynotmatch(){
    let flag=document.getElementById("flag");
    flag.innerText="Passwords Do Not Match";
    flag.stylr.color="green"
}