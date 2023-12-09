let index = 0
const slides =5;
const left = document.querySelector('.button__left')
const rigth = document.querySelector('.button__rigth')
const articleUl = document.querySelector('.article__ul')
const urlSlides=["../assets/img/header/cafe1.jpg","../assets/img/header/cafe2.jpg","../assets/img/header/cafe3.jpg","../assets/img/header/cafe4.jpg","../assets/img/header/cafe5.jpg"]



setInterval(next,1000);



left.addEventListener('click', function next () {
  // window.alert('left')
  index = (index > 0) ? --index : urlSlides.length - 1
  document.querySelector(".imgSlider").src= `${urlSlides[index]}`;
})

rigth.addEventListener('click', function() {
  // window.alert('rigth')
  index = (index < urlSlides.length - 1) ? ++index : 0
  document.querySelector(".imgSlider").src= `${urlSlides[index]}`;

})
