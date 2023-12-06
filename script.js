const menuContainerTag = document.querySelector
('.men-container')
const laymenuTag = document.querySelector('.laymenu')
const lineOneTag = document.querySelector('.line-1')
const lineTwoTag = document.querySelector('.line-2')
const lineThreeTag = document.querySelector('.line-3')
menuContainerTag.addEventListener('click',() =>{
  if(menuContainerTag.classList.contains('opened')){
    lineTwoTag.classList.remove('hightline2')
    lineOneTag.classList.remove('roateplus')
    lineThreeTag.classList.remove('roate-')
    menuContainerTag.classList.remove('opened')
    laymenuTag.classList.remove('showMenu')
  }else {
    laymenuTag.classList.add('showMenu')
    lineTwoTag.classList.add('hightline2')
    lineOneTag.classList.add('roateplus')
    lineThreeTag.classList.add('roate-')
    menuContainerTag.classList.add('opened')
  }

})