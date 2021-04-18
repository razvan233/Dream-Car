const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.content');
const links = navLinks.querySelectorAll('a');

function toggleMenuIcon() {
    menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);



function togglenavLinks() {
    navLinks.classList.toggle('toggle')
}

menuIcon.addEventListener('click', togglenavLinks);


links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.toggle("toggle");
        menuIcon.classList.toggle("active");
    });
});