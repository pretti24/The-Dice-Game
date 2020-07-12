// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;              //returns random number between 1 to 6

var randomDiceImage = "images/dice" + randomNumber1 + ".png";       //concating random number to images(dice1 to dice6.png)

// var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];                   //change the source attribute of image element

image1.setAttribute("src", randomDiceImage);



// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);



// Winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win!"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw!!"
}

