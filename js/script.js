window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#1B5E20";

}else{

header.style.background="#2E7D32";

}

});