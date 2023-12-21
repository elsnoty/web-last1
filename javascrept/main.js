let coupon = document.getElementById("coupon")
coupon.addEventListener("click", function() {
  showMessage("Copied: Coupon50%OFF");
  setTimeout(function() {
  hideMessage();
  }, 2500);
});
function showMessage(message) {
  let messageC = document.getElementById("message");
  messageC.textContent = message;
  messageC.style.cssText = `z-index: 1;
  position: relative;
  background: darkgoldenrod;
  padding: 5px;
  opacity: 0.8;
  border-radius: 5px;
  left: 54rem;
  /* top: 25px; */
  width: 8%;`;
}
function hideMessage() {
  let messageC = document.getElementById("message");
  messageC.style.display = "none";
}
// countDown
let countDown= new Date("dec 22, 2023 04:00:00")
console.log(countDown);
let counter = setInterval(() => {
// date now
let dateNow = new Date().getTime();
let dateDiff = countDown - dateNow;
let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let second = Math.floor((dateDiff % (1000 * 60)) / 1000);
document.querySelector(".day").innerHTML = day < 10 ? `0${day}` : day;
document.querySelector(".hour").innerHTML = hour < 10 ? `0${hour}` : hour;
document.querySelector(".minute").innerHTML = minute < 10 ? `0${minute}` : minute;
document.querySelector(".second").innerHTML = second < 10 ? `0${second}` : second;
if (dateDiff < 0) {
clearInterval(counter);
}
}, 1000);
// countDown

// today scroll z
function scroll_l() {
  let product_r = document.querySelector(".box-product");
  product_r.scrollBy(-350, 0)
}
function scroll_r() {
  let product_l = document.querySelector(".box-product");
  product_l.scrollBy(350, 0)
  
}
// end today scroll

// ssssssssssssssssssssssssssssssssssssss
let plus = document.getElementById("up-arrow")
let negtive = document.getElementById("down-arrow")
let num =document.getElementById("total-count")
console.log(plus);
console.log(parseInt(num.textContent));
negtive.addEventListener("click", function() {
  let y = parseInt(num.textContent);
  y -=1
  if (y >= 0) {
    num.textContent = y;
  }else{
    console.log("dddddd");
  }
})

plus.addEventListener("click", function() {
  let y = parseInt(num.textContent)
  y += 1;
  num.textContent = y;
})




/* old code */
/*
CopyCoupon() {
//copy coipon
navigator.clipboard.writeText("Coupon50%OFF");
// Alert the copied text
alert("Copied : " + "Coupon50%OFF");
var couponcolor = document.getElementById("copy-coupon");
couponcolor.style.color="rgb(167,243,208)";
}


*/

