let hamburgerMenu = document.querySelector(".hamburger");
let menuBar = document.getElementById("menu");

hamburgerMenu.addEventListener('click', function () {
  menuBar.classList.toggle('active');
  console.log('you clicked me!');
});

// function toggleMenu() {
//   // console.log(toggleMenu());
//   hamburgerMenu.classList.toggle("active");
//   menuBar.classList.toggle("active");
// }
// toggleMenu();
