//HOMEPAGE
const allContainer = document.querySelector('.all-container');
const entrance = document.querySelector('.entrance');
const bg = document.querySelector('.bg');
const header =document.querySelector('header');
const nav = document.querySelector('nav');
const social = document.querySelector('.socialmedia-container');
const imageContainer = document.querySelector('.image-container');
const btnContainer = document.querySelector('.btn-container');


document.body.addEventListener('click', function(){
  document.body.style.overflowY = 'visible';
  bg.classList.add('out');
  entrance.style.display ='none';
  allContainer.classList.add('in');
});



//IMAGE SLIDER
const data = [
    {
      img: "image/redefining_femininity/tatiana.jpg",
      name: 'TATIANA PANAKAL',
    },
    {
      img: "image/redefining_femininity/tati.jpg",
      name: 'TATIANA PANAKAL',
    },
    {
      img: "image/redefining_femininity/leticia.jpg",
      name: 'LETICIA SOARES',
    },
    {
      img: "image/redefining_femininity/leticia2.jpg",
    name: 'LETICIA SOARES',
    },
    {
      img:"image/redefining_femininity/veronica.jpg",
      name: 'VERONICA',
    },
    {
      img:"image/redefining_femininity/olesia.jpg",
      name: 'OLESIA PEROVA',
    },
    {
      img: "image/redefining_femininity/sophie-h.jpg",
      name: 'SOPHIE HABERMANN',
    },
    {
      img:"image/redefining_femininity/anya.jpg",
      name: 'HANNA',
    },
    {
      img: "image/redefining_femininity/eva1.jpg",
      name: 'EVA KRISTINA',
    },
    {
      img: "image/redefining_femininity/eva2.jpg",
      name: 'EVA KRISTINA',
    },
    {
      img: "image/redefining_femininity/mariya.jpg",
      name: 'MARIA BESSONOVA',
    },
  
    {
      img: "image/redefining_femininity/danae.jpg",
      name: 'DANAE LOU',
    },
    {
      img: "image/redefining_femininity/alyssa.jpg",
      name: 'ALYSSA TOWNING',
    },
    {
      img: "image/redefining_femininity/belle.jpg",
      name: 'BELLE BROOKS',
    },
  ];

  //select HTML image
const img = document.querySelector('.image');
const number = document.querySelector('.number');
let description = document.querySelector('.image-description');

//select HTML button
const prevBtn = document.querySelector('.prevButton');
const nextBtn = document.querySelector('.nextButton');

//setup initial item to 0
let currentItem = 0;
let currentNumber = 1;

//setup default item
window.addEventListener('DOMContentLoaded', function(){
  showItem()
});

//setup showItem function
function showItem(){
  const item = data[currentItem];
  img.src = item.img;
  number.textContent = currentNumber;
  description.textContent = item.name;
}

//setup nextBtn event
nextBtn.addEventListener('click', function(){
  currentItem++;
  currentNumber++;
  if(currentItem > data.length - 1){
    currentItem = 0;
    currentNumber = 1;
  }
  showItem();
})

//setup prevBtn event
prevBtn.addEventListener('click', function(){
  currentItem--;
  currentNumber--;
  if (currentItem < 0){
    currentItem = data.length - 1;
  }
  if (currentNumber < 1){
    currentNumber = data.length;
  }
  showItem();
});