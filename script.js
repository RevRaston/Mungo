var slideshow = document.getElementById("slideshow");
var slides = [
  "wed.jpg",
"buff.jpg", "mod.jpg",
  "hike.jpg",
];
var slideshowHeight = 300;
var slideshowWidth = 400;
var fullWidth = slideshowWidth*slides.length;
var slideContainer = document.createElement("div");

slideshow.style.height = slideshowHeight+"px";
slideshow.style.width = slideshowWidth+"px";
slideContainer.style.height = slideshowHeight+"px";
slideContainer.style.width = fullWidth+"px";
function createSlide(img){
  let slide = document.createElement("div");
  if(img == slides[0]){
    slide.id="firstSlide";
  }
  slide.classList.add("slide");
  slideContainer.appendChild(slide);
  slide.style.display = "inline-block";
  slide.style.height = slideshowHeight+"px";
  slide.style.width = slideshowWidth+"px";
  slide.style.backgroundImage = "url('"+img+"')";
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPositon = "center";
  slideshow.appendChild(slideContainer);
}
slides.forEach(img => createSlide(img));

var sliding = false;

function slide(){
  if (sliding == false){
    clearInterval(time)
    sliding = true;
    let firstSlide = document.getElementById("firstSlide");
    firstSlide.style.marginLeft = -1*slideshowWidth+"px";
    setTimeout(function(){
      var first = slides.shift();
      slides.push(first);
      slideContainer.innerHTML="";
      slides.forEach(img => createSlide(img));
      sliding = false;
      time = setInterval(slide,6000);
    },1000);
  }
}
function slideBack(){
  if (sliding == false){
    clearInterval(time)
    sliding = true;
    var last = slides.pop();
    slides.unshift(last);
    slideContainer.innerHTML="";
    slides.forEach(img => createSlide(img));
    let firstSlide = document.getElementById("firstSlide");
    firstSlide.style.marginLeft = -1*slideshowWidth+"px";
    setTimeout(function(){
      firstSlide.style.marginLeft = 0;
    },10);
    setTimeout(function(){
      sliding = false;
      time = setInterval(slide,6000);
    },1000);
  }
}

var time = setInterval(slide,6000);