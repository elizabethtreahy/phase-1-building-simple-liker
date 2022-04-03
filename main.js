// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal')
modal.classList.add("hidden");

const like = document.getElementsByClassName('like-glyph')
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (like[i].classList.contains('activated-heart')) {
          like[i].classList.remove('activated-heart')
          like[i].innerHTML = EMPTY_HEART
        }
        else {
          like[i].classList.add('activated-heart')
          like[i].innerHTML = FULL_HEART
        }
      })
      .catch(() => {
        modal.classList.remove('hidden')
        setTimeout(() => modal.classList.add("hidden"), 3000)
      })
  })
}










//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
