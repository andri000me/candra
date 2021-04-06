/*
    nama : candra dwi cahyo
    umur : 16 tahun
    email : candradwicahyo18@gmail.com
*/

window.addEventListener('scroll', () => {
  const scrollingBtn = document.querySelector('.scrolling-container')
  scrollingBtn.classList.toggle('active', window.scrollY > 200)
})

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', function() {
  const navListContainer = document.querySelector('.nav-list-container')
  
  this.classList.toggle('active')
  navListContainer.classList.toggle('active')
})
