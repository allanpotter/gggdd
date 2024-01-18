
document.getElementById("lang-en").onclick = function(){
    document.getElementById("lang-en").style.backgroundColor = "red";
    document.getElementById("lang").style.backgroundColor = "transparent";
const fruitInput = document.getElementById("fruitInput");
const fruits = ["grapes","melon", "blueberry","apple","banana","watermelon","peach","coconut","strawberry","lemon","papaya","mango" ];
const fruitButton = document.getElementById("fruitButton");
const fruitLabel = document.getElementById("fruitLabel");
const fruitImages = document.getElementById("imagess");
const tryGuess = document.getElementById("tryGuess");
const images = [];
const numbers = [];
const labb = document.getElementById("labb");
let points = 0;
let fruitIndex  =  Math.floor(Math.random()* fruits.length); 

fruitButton.innerHTML = "Start";
tryGuess.innerHTML = "Guess";

fruitButton.addEventListener("click", function(){
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    images.push(`<img id="imagesFr" src="fruit_images/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Randomize!";
    fruitInput.value = "";
    
})

tryGuess.addEventListener("click", function(){
    if(fruitInput.value === fruits[fruitIndex]){
        points ++;
        fruitLabel.innerHTML = "You did it, " + "You have: " + points + " points";
        labb.style.display = "block"
        document.getElementById("alert").style.display = "none"

        fruitButton.innerText = "Next!";
        labb.style.backgroundColor = "green";
        if(points === 1){
            fruitLabel.innerHTML = "You did it, " + "You have: " + points + " point";
        }
        if(points ===10){
            fruitLabel.innerHTML = "Amazing! " + "You have: " + points + " points";
        }
        
    }
    else{
    fruitLabel.innerHTML = "You lost, " + "You made: " + points + " points";
    fruitButton.innerText = "Reset";
    points =0;
    labb.style.display = "block"
    labb.style.backgroundColor = "red";
    document.getElementById("attention").innerHTML = "Remember to write in lowercase";
    document.getElementById("alert").style.display = "block"

} 
})
}




document.getElementById("top-language").onclick = function(){
    document.getElementById("lang-en").style.backgroundColor = "transparent";
    document.getElementById("lang").style.backgroundColor = "green";
    const fruitInput = document.getElementById("fruitInput");
const fruits = ["uva","melão", "mirtilo","maçã","banana","melancia","pêssego","coco","morango","limão","mamão","manga" ];
const fruitButton = document.getElementById("fruitButton");
const fruitLabel = document.getElementById("fruitLabel");
const fruitImages = document.getElementById("imagess");
const tryGuess = document.getElementById("tryGuess");
const images = [];
const numbers = [];
const labb = document.getElementById("labb");
let points = 0;
let fruitIndex  =  Math.floor(Math.random()* fruits.length); 


fruitButton.innerHTML = "Começar";
tryGuess.innerHTML = "Tentar";

fruitButton.addEventListener("click", function(){
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    images.push(`<img id="imagesFr" src="fruit_images/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Aleatório!";
    fruitInput.value = "";
    


})
tryGuess.addEventListener("click", function(){
    if(fruitInput.value === fruits[fruitIndex]){
        points ++;
        fruitLabel.innerHTML = "Você conseguiu, " + "Você tem: " + points + " pontos";
        labb.style.display = "block"
        fruitButton.innerText = "Proximo";
        labb.style.backgroundColor = "green";
        document.getElementById("alert").style.display = "none"

        if(points === 1){
            fruitLabel.innerHTML = "Você conseguiu, " + "Você tem: " + points + " ponto";
        }
        if(points ===10){
            fruitLabel.innerHTML = "Incrivel! " + "Você tem: " + points + " pontos";
        }
        
    }
    else{
    fruitLabel.innerHTML = "Você perdeu, " + "Você fez: " + points + " pontos";
    fruitButton.innerText = "Resetar";
    points =0;
    labb.style.display = "block"
    labb.style.backgroundColor = "red";
    document.getElementById("attention").innerHTML = "Lembre-se de escrever tudo minúsculo!";
    document.getElementById("alert").style.display = "block"

} 
})
}