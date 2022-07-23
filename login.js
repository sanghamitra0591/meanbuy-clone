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
form.addEventListener("submit",checkdata);
let signdata=JSON.parse(localStorage.getItem("signdata"));
function checkdata(event){
    event.preventDefault();
    let logobj={
        mail:form.mail.value,
        pass:form.password.value,
    }
    if(signdata===null){
        document.getElementById("nomail").innerText="Incorrect username and password"
    }else{
        signdata.forEach(function(el){
            if(el.mail!==form.mail.value){
                document.getElementById("nomail").innerText="Incorrect username and password"
            }
            if(el.pass!==form.password.value){
                document.getElementById("nomail").innerText="Incorrect username and password"
            }
            if(form.password.value===""){
                document.getElementById("nopass").innerText="The Password field is required."
            }
            if(el.pass===form.password.value && el.mail===form.mail.value){
                window.location.assign("./afterlogin.html");
                localStorage.setItem("logindata",JSON.stringify(logobj));
            }
        })
    }
}