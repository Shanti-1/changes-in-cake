const thediv = document.getElementById('the-div');
const divtwo = document.getElementById('divtwo');
const theimagetag = document.getElementById('img1');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', ()=>{
    const imagearray = [
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cake_quarters.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Emojione_1F382.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Birthday_cupcake.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Chocolate_cake.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Emojione_1F370.svg"
    ]
  for(let i = 0; i < imagearray.length; i++){
    theimagetag.src = imagearray[Math.floor(Math.random() * imagearray.length)];
  }
});