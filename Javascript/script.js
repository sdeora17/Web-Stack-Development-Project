const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button=>{
  button.addEventListener("click",() =>{
    const offset = button.dataset.carouselButton === "next"?1:-1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")
  
    const activeslide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeslide) + offset
    
    if(newIndex<0) newIndex = slides.children.length
    if(newIndex>=slides.children.length) newIndex = 0
  
    slides.children[newIndex].dataset.active = true
    delete activeslide.dataset.active
  
  })
})