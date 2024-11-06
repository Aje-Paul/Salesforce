const nextBtn1 = document.getElementById("next-btn1");
const backBtn1 = document.getElementById("back-btn1");
const backBtn2 = document.getElementById("back-btn2");
const nextBtn2 = document.getElementById("next-btn2");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const item = document.getElementById("item");
const www = document.getElementById("world-container2");

nextBtn1.addEventListener("click", function () {
  form1.style.display = "none";
  form2.style.display = "block";
});
backBtn1.addEventListener("click", function () {
  form2.style.display = "none";
  form1.style.display = "block";
});
nextBtn2.addEventListener("click", function (w) {
  w.preventDefault();
  form2.style.display = "none";
  form3.style.display = "block";
});
backBtn2.addEventListener("click", function () {
  form2.style.display = "block";
  form1.style.display = "none";
  form3.style.display = "none";
});
www.addEventListener("click", function (e) {
  if (item.style.display === "none") {
    item.style.display = "block";
    www.style.color = "lightblue";
  } else {
    item.style.display = "none";
    www.style.color = "white";
  }
});
