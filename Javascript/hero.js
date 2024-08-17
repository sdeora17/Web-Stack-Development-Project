const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

document.body.appendChild(lightbox)

const images = document.querySelectorAll('.carousel-img')

images.forEach(images=>{
  images.addEventListener('click',e=>{
    lightbox.classList.add('active')
    // console.log(images.src)
    const img = document.createElement('img');
    img.src = images.src
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})


lightbox.addEventListener('click',e=>{
  if(e.target !== e.currentTarget) return 
  lightbox.classList.remove('active')
})