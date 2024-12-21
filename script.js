let calculateBtn = document.querySelector(
  "#calculate-button"
);
let years = document.querySelector("#years");

let months = document.querySelector("#months");
let days = document.querySelector("#days");
let currentDate = new Date();
let errorText = document.querySelector(".error-text");
let result = document.querySelector(".result");
calculateBtn.addEventListener("click", () => {
  /*    console.log(inputDate.value);
   console.log(currentDate); */

  let inputDate = document.querySelector("input").value;

  if (inputDate) {
    errorText.style.display = "none";
    let initialDate = new Date(inputDate);
    let differenceInTime = currentDate - initialDate;
    let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60  * 24));

    
    let differenceYears = Math.floor(differenceInDays/365);
    let remainingDays = differenceInDays % 365;
    let differenceMonths = Math.floor(remainingDays / 30.42);
    let differenceDays = Math.floor( (remainingDays % 30.42));

    console.log(differenceYears, differenceMonths, differenceDays);
    
    years.textContent = differenceYears;
    months.textContent = differenceMonths;
    days.textContent = differenceDays;

   result.style.display = "block"; 
    
  }
    else {
        errorText.style.display="block";
        result.style.display = "none";
    }
});
