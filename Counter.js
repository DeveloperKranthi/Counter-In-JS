//Method 1
let showValue = document.getElementById("output");
let ListOfbtns = document.querySelectorAll(".btn");

ListOfbtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let currentBtn = e.currentTarget.classList;
    console.log(currentBtn);
    if (currentBtn.contains("Decrease")) {
      showValue.innerHTML--;
    } else if (currentBtn.contains("Increase")) {
      showValue.innerHTML++;
    } else {
      showValue.innerHTML = 0;
    }
  });
});

//Method 2
// let showValue = document.getElementById("output");
// let Decrement = document.querySelector(".Decrease");
// let Reset = document.querySelector(".reset");
// let Increment = document.querySelector(".Increase");

// Decrement.addEventListener("click", Decr);
// function Decr() {
//   showValue.innerHTML--;
// }

// Reset.addEventListener("click", ResetVal);
// function ResetVal() {
//   showValue.innerHTML = 0;
// }

// Increment.addEventListener("click", IncrementVal);
// function IncrementVal() {
//   showValue.innerHTML++;
// }
