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

