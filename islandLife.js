/*SLIDER CLICK*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//IMAGE SLIDER
const data = [
    {
      name: 'POLINA',
    },
    {
      name: 'EKATERINA - THAIKILA',
    },
    {
      name: 'ASTRID',
    },
    {
      name: 'SKYE-ROSE',
    },
    {
      name: 'NATALIA - TANN LINE',
    },
    {
      name: 'ASTRID - LOST IN PARADISE',
    },
    {
      name: 'LAURA',
    },
    {
      name: 'OLGA - SCAMPI SWIMWEAR',
    },
    {
      name: 'DENISA - THAIKILA',
    },
    {
      name: 'MARINA - THAIKILA',
    },
    {
      name: 'NASTYA - MVM SWIMWEAR',
    },
    {
      name: 'NATALIA - SCAMPI SWIMWEAR',
    },
    {
      name: 'LENTE - MVM SWIMWEAR',
    },
    {
      name: 'ALYONA - SASSA MOON',
    },
    {
      name: 'MASHA - VELVET PEACH',
    },
  ];

  //select HTML image
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