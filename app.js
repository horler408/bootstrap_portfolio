// ******* set date *******
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//navbar DOMs
/*const navContainer = document.getElementById('navbarNav');
const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('.nav-button');
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // To calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = navContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-top');

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 85) {
      position = position + containerHeight;
    }

    window.scrollTo({ left: 0, top: position });
  });
});
*/
