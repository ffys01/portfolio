
const navLink = document.querySelectorAll('.nav__link')
const navTog = document.querySelector('.nav-toggle')

navTog.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    })
})
