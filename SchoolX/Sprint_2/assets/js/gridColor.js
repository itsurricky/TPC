const tables = document.querySelector('dataTable');
const clicker = document.querySelector('bt');
const arrColor = [
    ' style="background-color: red" ',
    ' style="background-color: blue" ',
    ' style="background-color: yellow" ',
    ' style="background-color: pink" ',
    ' style="background-color: violet" '
]
clicker.addEventListener("click",function(){
    const color =arrColor[Math.floor(Math.random()*arrColor.length)];
    tables.innerHTML = color;
});