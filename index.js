var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice iamges

var randomImagesSource = "images/" + randomDiceImage; // image/dices

var image1 = document.querySelectorAll("img")[0]; //

image1.setAttribute("src", randomImagesSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

//if condition

if(randomNumber1> randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 win!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
