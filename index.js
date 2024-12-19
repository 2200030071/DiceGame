var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomDiceImage = "dice"+randomNumber1+".png";
var randomImage = "images/"+randomDiceImage;
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImage);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImage2 = "images/"+randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
 
img2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
 
    document.querySelector("h1").innerHTML="Player 1 Is Winner ❤️";
}
else if(randomNumber2>randomNumber1){
 
    document.querySelector("h1").innerHTML="Player 2 Is Winner ❤️";
}
else if (randomNumber1 == randomImage2){
  
    document.querySelector("h1").innerHTML="Draw";
}