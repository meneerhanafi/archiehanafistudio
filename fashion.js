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
      img: "image/fashion/denya.jpg",
      name: 'DENYA ALTEVERS',
    },
    {
      img: "image/fashion/phoenix.jpg",
      name: 'PHOENIX BRADSHAW',
    },
    {
      img: "image/fashion/alize.jpg",
      name: 'ALIZE BARANGE',
    },
    {
      img:"image//fashion/rebelmag1.jpg",
      name: 'JOEY ROSE - REBEL MAGAZINE',
    },
    {
      img:"image/fashion/rebelmag2.jpg",
      name: 'JOEY ROSE - REBEL MAGAZINE',
    },
    {
      img: "image/fashion/mckenna1.jpg",
      name: 'MCKENNA MOBLEY',
    },
    {
      img: "image/fashion/mckenna2.jpg",
      name: 'MCKENNA MOBLEY',
    },
    {
      img: "image/fashion/ellie1.jpg",
      name: 'ELLIE WALTERS',
    },
    {
      img: "image/fashion/ellie2.jpg",
      name: 'ELLIE WALTERS',
    },
    {
      img: "image/fashion/simone.jpg",
      name: 'SIMONE ANDREA',
    },
    {
      img: "image/fashion/inez3.jpg",
      name: 'INEZ VALENCIA',
    },
    {
      img: "image/fashion/inez2.jpg",
      name: 'INEZ VALENCIA',
    },
    {
      img: "image/fashion/denyaphoenix.jpg",
      name: 'DENYA ALTEVERS & PHOENIX BRADSHAW',
    },
    {
      img: "image/fashion/palma.jpg",
      name: 'JITTE COSEMANS - PALMA AUSTRALIA',
    },
    {
      img: "image/fashion/earth.jpg",
      name: 'PAULA SALORT - EARTH CIRCUS',
    },
    {
      img: "image/fashion/julia.jpg",
      name: 'JULIA GILFANOVA',
    },
    {
      img: "image/fashion/thaisa.jpg",
      name: 'THAISA CARVALHO',
    },
    {
      img: "image/fashion/camille.jpg",
      name: 'CAMILLE PEYSSELON',
    },
    {
      img: "image/fashion/sharonmarlisa.jpg",
      name: 'BARBARA BUCALAO - SHARON MARLISA',
    },
    {
      img: "image/fashion/valery.jpg",
      name: 'VALERY LIKHMAN',
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