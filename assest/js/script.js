
window.addEventListener('load', () => {
    let loader=document.getElementById("page-loader");
        loader .style.display="block";

    setTimeout(function(){
        loader .style.display="none";
    },1000)
  });

let  togglenavbar =document.getElementById("togglebtn"),
     closenavbar =document.getElementById("close-btn"),
     mainnav=document.getElementById("main-nav"),
     secondrynav=document.getElementById("secondry-nav");

     togglenavbar.addEventListener("click",function(){
        mainnav.classList.add("main-nav-active");
         secondrynav.classList.add("secondry-nav-active");
     });
     secondrynav.addEventListener("click",function(){
        secondrynav.classList.remove("secondry-nav-active");
        mainnav.classList.remove("main-nav-active");
        
     });

     let  accordings =document.querySelectorAll(".according");
    
     accordings.forEach(according => {
        according.addEventListener("click",function(){
            accordings.forEach(according => {
                according.classList.remove("according-active");
            
                });
            this.classList.add("according-active");
           
        })
        });

 let circle = document.querySelectorAll("circle"); 

let myTimeout = setTimeout(circleprogsses, 1000);

function circleprogsses() {
    circle.forEach(element => {
        element.classList.add("skill-active")
         }); 
}
       

