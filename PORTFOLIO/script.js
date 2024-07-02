var menulist=document.getElementById("navlist");
var menubar=document.querySelector(".menubar");
menubar.addEventListener("click",()=>{
    menulist.classList.toggle("showhide");
})