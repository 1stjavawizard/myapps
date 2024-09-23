
let thepass = document.getElementById("passw");
let mybtn = document.getElementById("eye");
let mycon = document.getElementById("eyed");

mybtn.addEventListener("click",function(){
   if(thepass.type == "password"){
    thepass.type = "text";
    mycon.innerText = "visibility_off";
   }
   else{
    thepass.type = "password";
    mycon.innerText = "visibility";
   }
})
