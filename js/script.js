// script.js - サポートセンター用JavaScript

document.addEventListener("DOMContentLoaded", function () {
  const phoneButton = document.getElementById("show-phone");
  const phoneNumber = document.getElementById("phone-number");

  if (phoneButton && phoneNumber) {
    phoneButton.addEventListener("click", function () {
      if (phoneNumber.style.display === "none") {
        phoneNumber.style.display = "block";
        phoneButton.textContent = "非表示にする";
      } else {
        phoneNumber.style.display = "none";
        phoneButton.textContent = "電話番号はこちら";
      }
    });
  }
});
