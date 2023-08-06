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
},{threshold: 0.5,});

const elements = document.querySelectorAll(".animate__animated");

elements.forEach((el) => observer.observe(el));

const hamburgerMenuBtn = document.querySelector('.hamburgerMenu');
const navLinks = document.querySelector(".hideShow2");
const header = document.querySelector(".head");
const frame = document.querySelector(".frame");
const closeIconBtn = document.querySelector(".last");
const allNavLinks = document.querySelectorAll("a");


const showNavLinks = () => {
    header.classList.toggle("head2");
    frame.classList.toggle("show2");
    hamburgerMenuBtn.classList.toggle("hide");
    closeIconBtn.classList.toggle("show2");
};

const removeCloseBtn = () => {
    header.classList.toggle("head2");
    frame.classList.toggle("show2");
    hamburgerMenuBtn.classList.remove("hide");
    closeIconBtn.classList.remove("show2");
};



hamburgerMenuBtn.addEventListener("click", showNavLinks);

closeIconBtn.addEventListener('click', removeCloseBtn);



function scrollToSection(event) {
    // hide dropdown on smaller screens after clicking
    header.classList.remove("head2");
    frame.classList.remove("show2");

    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    let targetPosition = targetElement.getBoundingClientRect().top;
    const headerHeight = document.querySelector("nav").offsetHeight;
    
    const finalScrollPosition = targetPosition + window.scrollY - headerHeight;
    window.scroll({
        top: finalScrollPosition,
        behavior: "smooth",
    });
}

allNavLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
    link.addEventListener("click", () => {
        header.classList.remove("head2");
        frame.classList.remove("show2");
        hamburgerMenuBtn.classList.remove("hide")
        closeIconBtn.classList.remove("show2");
        
    });
});




