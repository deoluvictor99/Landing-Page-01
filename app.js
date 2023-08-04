const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const currentClasses = entry.target.classList;
        const newClasses = [];

        for (const classname of currentClasses) {
        if (classname.startsWith("__")) {
            newClasses.push(`animate${classname}`);
        }
        }

        entry.target.classList.add(...newClasses);
    }
    });
},
{
    threshold: 0.5,
}
);

const elements = document.querySelectorAll(".animate__animated");

elements.forEach((el) => observer.observe(el));

const hamburgerMenuBtn = document.querySelector('.hamburgerMenu');
const navLinks = document.querySelector(".hideShow2");
const header = document.querySelector(".head");

hamburgerMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("show2");
    header.classList.toggle("head2");
})
