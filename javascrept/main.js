function CopyCoupon() {
  navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    if (result.state === 'granted' || result.state === 'prompt') {
      navigator.clipboard.writeText("Coupon50%OFF").then(() => {
        // Alert the copied text
        alert("Copied: Coupon50%OFF");

        // Change the color of the element
        var couponcolor = document.getElementById("copy-coupon");
        couponcolor.style.color = "rgb(167, 243, 208)";
      }).catch(error => {
        console.error('Failed to copy text:', error);
      });
    }
  });
}
// countDown
let countDown= new Date("dec 22, 2023 00:00:00")
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

// today scroll 
function scroll_l() {
  let product_r = document.querySelector(".box-product");
  product_r.scrollBy(-350, 0)
}
function scroll_r() {
  let product_l = document.querySelector(".box-product");
  product_l.scrollBy(350, 0)
  
}
// end today scroll

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

