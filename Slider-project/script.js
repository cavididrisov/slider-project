const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');

const imageContainer = document.querySelector('.imageContainer');
let currentPosition = 0;
prevIcon.addEventListener('click', () =>{
    if(currentPosition ==0){
        currentPosition = -3500;
    }
  
    currentPosition += 700;
    imageContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
  
  
    
})
nextIcon.addEventListener('click', () =>{
    currentPosition -= 700;
    imageContainer.style.transform = `translateX(${currentPosition}px)`;
    if(currentPosition == -2800){
        currentPosition = 700
       }
       console.log(currentPosition);
})
setInterval(function(){
    currentPosition -= 700;
    imageContainer.style.transform = `translateX(${currentPosition}px)`;
    if(currentPosition == -2800){
        currentPosition = 700
       }
},5000)
// const imgs = document.querySelectorAll('img');

// let currentImg = 1;
// let timeout;

// prevIcon.addEventListener('click', () => {
//   currentImg--;
//   clearTimeout(timeout);
//   updateImg();
// });

// nextIcon.addEventListener('click', () => {
//   currentImg++;
//   clearTimeout(timeout);
//   updateImg();
// });

// function updateImg() {
//   if (currentImg > imgs.length) {
//     currentImg = 1;
//   } else if (currentImg < 1) {
//     currentImg = imgs.length;
//   }
//   imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
//   timeout = setTimeout(() => {
//     currentImg++;
//     updateImg();
//   }, 4000);
// }

// updateImg();
