const giftBox = document.getElementById("gift-box");
const giftBox2 = document.getElementById("gift-box2");
const message = document.getElementById("message");
const image = document.getElementById("image");

giftBox.addEventListener("click", toggleGiftBox);
giftBox2.addEventListener("click", toggleGiftBox2);

function toggleGiftBox() {
  if (giftBox.classList.contains("open")) {
    giftBox.classList.remove("open");
    message.style.opacity = "0";
  } else {
    giftBox.classList.add("open");
    setTimeout(function() {
        message.style.opacity = "1";
      }, delayInMilliseconds);
    
  }
}


function toggleGiftBox2() {
    if (giftBox2.classList.contains("open")) {
      giftBox2.classList.remove("open");
      image.style.opacity = "0";
    } else {
      giftBox2.classList.add("open");
      setTimeout(function() {
        image.style.opacity = "1";
        }, delayInMilliseconds);
      
    }
  }



var delayInMilliseconds = 222; //1 second