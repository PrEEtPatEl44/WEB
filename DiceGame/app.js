window.onload= function(){
    var n = (Math.floor(Math.random()*6))+1;
    var img1=document.querySelector(".img1").setAttribute("src", "./images/dice"+n+".png");
    var img2=document.querySelector(".img2").setAttribute("src", "./images/dice"+n+".png");
   
};