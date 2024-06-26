const menuBtn = document.getElementById('hamburgerMenu')
const closeBtn = document.getElementById('close')
const menuList = document.getElementById('menuSection')

menuList.classList.add('hidden')

menuBtn.addEventListener('click', ()=>{
  menuList.classList.remove('hidden')
  menuList.classList.add('active')
})

closeBtn.addEventListener('click', ()=> {
  menuList.classList.remove('active')
  menuList.classList.add('hidden')

})
