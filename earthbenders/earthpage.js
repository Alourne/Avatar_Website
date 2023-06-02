const pauseIconClassName = 'fa-pause'
const playIconClassName = 'fa-play'

const btns = document.querySelectorAll('.btn')

function onChange (event) {
  // get the button elememt from the event
    const buttonElement = event.currentTarget
  
  // check if play button class is present on our button
  const isPlayButton = buttonElement.classList.contains(playIconClassName)
  
  // if a play button, remove the play button class and add pause button class
  if (isPlayButton) {
    buttonElement.classList.remove(playIconClassName)
    buttonElement.classList.add(pauseIconClassName)
    
    // if a pause button, remove pause button class and add play button class
  } else {
    buttonElement.classList.remove(pauseIconClassName)
    buttonElement.classList.add(playIconClassName)
  }


  // You can also use .toggle function on classList as mentioned by the person in other answer
}

// query selector all returns a list of nodes, therefore we need to iterate over it and attach an event listener to each button seperatly
btns.forEach(btn => {
    btn.addEventListener('click', onChange)
})