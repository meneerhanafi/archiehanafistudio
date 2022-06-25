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
      name: 'DENYA ALTEVERS',
    },
    {
      name: 'PHOENIX BRADSHAW',
    },
    { 
      name: 'ALIZE BARANGE',
    },
    {
      name: 'JOEY ROSE - REBEL MAGAZINE',
    },
    { 
      name: 'JOEY ROSE - REBEL MAGAZINE',
    },
    {
      name: 'MCKENNA MOBLEY',
    },
    {
      name: 'MCKENNA MOBLEY',
    },
    {
      name: 'ELLIE WALTERS',
    },
    {
      name: 'ELLIE WALTERS',
    },
    {
      name: 'SIMONE ANDREA',
    },
    { 
      name: 'INEZ VALENCIA',
    },
    {
      name: 'INEZ VALENCIA',
    },
    {
      name: 'DENYA ALTEVERS & PHOENIX BRADSHAW',
    },
    {
      name: 'JITTE COSEMANS - PALMA AUSTRALIA',
    },
    {
      name: 'PAULA SALORT - EARTH CIRCUS',
    },
    { 
      name: 'JULIA GILFANOVA',
    },
    { 
      name: 'THAISA CARVALHO',
    },
    {
      name: 'CAMILLE PEYSSELON',
    },
    { 
      name: 'BARBARA BUCALAO - SHARON MARLISA',
    },
    {
      name: 'VALERY LIKHMAN',
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