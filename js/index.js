"use strict"

// // ! pages
// let homePage=document.getElementById("home")
// let addPage=document.getElementById("add")
// let contactPage=document.getElementById("contact")
// let notificationsLogPage=document.getElementById("notifications-log")

// // ! Links
// let homeLink=document.getElementById("homeLin")
// let notificationsLogLink=document.getElementById("notificationsLogLin")
// let addLink=document.getElementById("addLin")
// // let newDosLink=document.getElementById("newDosLin")
// // let dashBordLink=document.getElementById("dashBordLin")
// let contactLink=document.getElementById("contactLin")



// homeLink.addEventListener("click",()=>{
//   notificationsLogLink.classList.add("d-none")
//   addLink.classList.add("d-none")
//   newDosLink.classList.add("d-none")
//   dashBordLink.classList.add("d-none")
//   contactLink.classList.add("d-none")
// })




// pages
let pages = document.querySelectorAll("section");

// links
let homeLink = document.getElementById("homeLin");
let notificationsLogLink = document.getElementById("notificationsLogLin");
let addLink = document.getElementById("addLin");
let contactLink = document.getElementById("contactLin");

// function تخفي كل السكاشن
function hideAllPages(){
  pages.forEach(page=>{
    page.classList.add("d-none");
  });
}

// home
homeLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("home").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// notifications
notificationsLogLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("notifications-log").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// add
addLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("add").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// contact
contactLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("contact").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});












// dark mode
const darkBtn = document.querySelector(".dark-iecon");
const icon = darkBtn.querySelector("i");

// ---- استعادة الوضع من LocalStorage ----
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  icon.classList.add("fa-sun");
  icon.classList.remove("fa-moon");
  
} else {
  document.body.classList.remove("dark");
  icon.classList.add("fa-moon");
  icon.classList.remove("fa-sun");
  
}

// ---- تغيير الوضع عند الضغط ----
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
    
  }

  // ---- حفظ الوضع ----
  localStorage.setItem("darkMode", isDark);
});
