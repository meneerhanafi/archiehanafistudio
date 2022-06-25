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
      img: "image/island_life/polina.jpg",
      name: 'POLINA',
    },

    {
      img: "image/island_life/thaikila8.jpg",
      name: 'EKATERINA - THAIKILA',
    },
    {
      img: "image/island_life/astrid3.jpg",
      name: 'ASTRID',
    },
    {
      img: "image/island_life/skye.jpg",
      name: 'SKYE',
    },
    {
      img: "image/island_life/tann.jpg",
      name: 'NATALIA - TANN LINE',
    },
    {
      img: "image/island_life/lip2.jpg",
      name: 'ASTRID - LOST IN PARADISE',
    },
    {
      img: "image/island_life/laura.jpg",
      name: 'LAURA',
    },
    {
      img: "image/island_life/scampi5.jpg",
      name: 'OLGA - SCAMPI SWIMWEAR',
    },
    {
      img: "image/island_life/balquisse2.jpg",
      name: 'DENISA - THAIKILA',
    },
    {
      img: "image/island_life/thaikila1.jpg",
      name: 'MARINA - THAIKILA',
    },
    {
      img: "image/island_life/mvm1.jpg",
      name: 'NASTYA - MVM SWIMWEAR',
    },
    {
      img: "image/island_life/scampi1.jpg",
      name: 'NATALIA - SCAMPI SWIMWEAR',
    },
    {
      img: "image/island_life/mvm2.jpg",
      name: 'LENTE - MVM SWIMWEAR',
    },
    {
      img: "image/island_life/alyona.jpg",
      name: 'ALYONA - SASSA MOON',
    },
    {
      img: "image/island_life/mashakost.jpg",
      name: 'MASHA - VELVET PEACH',
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