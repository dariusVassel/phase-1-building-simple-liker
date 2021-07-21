// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const selectHearts = document.querySelectorAll('.like-glyph')

for (hearts of selectHearts){
  hearts.addEventListener('click', e => {
    console.log(e.target)
    mimicServerCall()
      .then(()=> {
        e.target.classList.add('activated-heart')
      })
      .catch((error)=>{
        alert("We got an ERROR");
        console.log(error)
        const errorSelector = document.getElementById('modal')
        errorSelector.classList.remove('hidden')
        setTimeout(function(){ errorSelector.classList.add('hidden'); }, 3000);
      })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
