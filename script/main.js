const myHeading = document.querySelector('h1'); // This is a comment.
myHeading.textContent = 'Hello World!';
/*
Everything in this is a comment.
 */
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/odin-logo.svg') {
    myImage.setAttribute('src', 'images/odin2.jpg');
    } else {
      myImage.setAttribute('src', 'images/odin-logo.svg');
    }
}
