const imageBox = document.querySelectorAll('.imageBox');
    const closeButtons = document.querySelectorAll("button");


imageBox.forEach( box =>{
    box.addEventListener('click',()=>{ 
        classSil();
        box.classList.add('active');
        console.log(box);
     })
})
function classSil(){
    imageBox.forEach( box =>{
      
            box.classList.remove('active');

         })
    }

closeButtons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.target.parentElement.classList.remove('active');
        console.log(e.target.parentElement);
    })
})
 
   


         
    