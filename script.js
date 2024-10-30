let on = document.querySelector("#moon");
let text = document.querySelector("#para");

on.addEventListener("click",()=>{
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
    on.src = "sun.png";
   }
   else{
    on.src = "moon.png";
   }
})