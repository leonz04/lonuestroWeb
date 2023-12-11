let index = 0
const slides =5;
const left = document.querySelector('.button__left')
const rigth = document.querySelector('.button__rigth')
const urlSlides=["../assets/img/header/cafe1.webp","../assets/img/header/cafe2.webp","../assets/img/header/cafe3.webp","../assets/img/header/cafe4.webp","../assets/img/header/cafe5.webp"]



setInterval(next,4000);

function next(){
  if (index<urlSlides.length-1){
    index++;
    document.querySelector(".imgSlider").src= `${urlSlides[index]}`;
  }else{
    document.querySelector(".imgSlider").src= `${urlSlides[0]}`;
  }

}



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
