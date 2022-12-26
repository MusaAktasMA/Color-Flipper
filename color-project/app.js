const colors = ["green", "red", "purple", "yellow", "pink", "orange", "black",
 "blue", "brown", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "BlueViolet", "CadetBlue", "Chartreuse"
, "CornflowerBlue", "Crimson", "DarkMagenta", "DarkOrchid", "DarkSeaGreen", "DarkSlateBlue", "DeepPink", "Fuchsia", "HotPink", "Indigo",
"LightSkyBlue", "Maroon", "Magenta", "MediumAquaMarine", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "OrangeRed", "PaleTurquoise", "Plum",
 "SpringGreen", "Thistle", "Tan", "Tomato", "Turquoise"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}