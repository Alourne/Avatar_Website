var nyan = document.getElementById('avatar');
var nyanBtn = document.getElementById('ctrlIcon');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn, song);
      }
      //set inset box shadow
      btn.style.boxShadow = "inset " + btn.offsetWidth * (percent/100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
      //call function again
      progress(btn, song);     
   }, 1000);

}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});


const pauseIconClassName = 'fa-pause'
const playIconClassName = 'fa-play'

const btns = document.querySelectorAll('.btn')

function onChange (event) {
  // get the button element from the event
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

///Mute

var mute = document.getElementById('muteIcon');
muteIcon.addEventListener('click', toggleMute, false);

function toggleMute() {
    if(avatar.muted==true) {
        avatar.muted = false;
    } else {
        avatar.muted = true;
    }
    // var myAudio = document.getElementById('avatar');
    // myAudio.muted = !myAudio.muted;
 }