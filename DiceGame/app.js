
    var n1 = (Math.floor(Math.random()*6))+1;
    var n2 = (Math.floor(Math.random()*6))+1;
    var img1=document.querySelector(".img1").setAttribute("src", "./images/dice"+n1+".png");
    var img2=document.querySelector(".img2").setAttribute("src", "./images/dice"+n2+".png");
   if(n1>n2){
        document.querySelector("h1").innerHTML="Player 1 wins";
   }
   else if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 wins";    
   }
   else{
    document.querySelector("h1").innerHTML="Tie";
   };