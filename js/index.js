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
let adddocNewDoc = document.getElementById("adddocNewDoc");
let contactLink = document.getElementById("contactLin");
let renewalGuideDesLink = document.getElementById("renewal-guide-desLin");
let newDosLink = document.getElementById("newDosLin");
let countactBtn = document.getElementById("countactBtn");
let homeErrorBtn = document.getElementById("homeErrorBtn");
let dashBordLink = document.getElementById("dashBordLin");
let dashboardAddDoc = document.getElementById("dashboardAddDoc");
let signInNavbar = document.getElementById("signInNav");

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
// adddocNewDoc
adddocNewDoc.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("addNewDos").classList.remove("d-none");
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
// renewal-guide-des
renewalGuideDesLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("renewal-guide-des").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// countactBtn
countactBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("contact").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// add new dos  اضافه وثيقه جديده 
newDosLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("addNewDos").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

//dashboard
dashBordLink.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("dashboard").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});
//sign In Navbar
signInNavbar.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("signIn").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});
//dashboardAddDoc
dashboardAddDoc.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("addNewDos").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

// homeErrorBtn
homeErrorBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  hideAllPages();
  document.getElementById("home").classList.remove("d-none");
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});


























// لما اضغط ع اي لينك ف  side bar  يختفي لوحده
const offcanvasElement = document.getElementById('offcanvasNavbar');
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

// كل اللينكات ما عدا زر الإعدادات
document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    
    // لو اللينك فيه dropdown (يعني إعدادات) → متقفلش
    if (link.getAttribute('data-bs-toggle') === 'dropdown') {
      return;
    }

    offcanvas.hide();
  });
});

// لما تختار عنصر من dropdown يقفل
document.querySelectorAll('#offcanvasNavbar .dropdown-menu .nav-link, #offcanvasNavbar .dropdown-menu li').forEach(item => {
  item.addEventListener('click', () => {
    offcanvas.hide();
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
