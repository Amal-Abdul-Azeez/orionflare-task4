

function myfunc(){
  
     var image=document.getElementById('pic');
     
    if(image.src=="bulboff.jpg"){
       image.src="bulbon.png";
     
    }
     else{
         image.src="bulboff.jpg";
     
     }
    
   
 }
 var image=document.getElementById('pic').src;
    var element=document.getElementsByClassName("toggle-btn");