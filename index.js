let random1 = Math.floor(Math.random()*6) + 1;
let randomdice="dice"+random1+".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdice);

let random2=Math.floor(Math.random()*6)+1;
let randomimg2="dice"+random2+".png";
let image2=document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Subhranjali &nbsp WINS!🐈😺";
    document.querySelector("h1").style.color="purple";
} else if(random2==random1){
    document.querySelector("h1").innerHTML="DRAW!";
    document.querySelector("h1").style.color="blue";
    

} else{
    document.querySelector("h1").innerHTML="Supratim &nbsp WINS!🐶🐒";
    
}
