

let brands= document.getElementById("brands");
let brandsdiv= document.getElementById("brandsdiv");
brands.addEventListener("click", brandsShow);

function brandsShow(e){
    e.preventDefault();
    brandsdiv.style.display==="inline" ? brandsdiv.style.display="none" : brandsdiv.style.display="inline";
}