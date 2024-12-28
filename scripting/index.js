window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll(".ContentPanel");
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href='#${section.id}']`);
        if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().bottom > window.innerHeight / 2) {
            navLink.parentElement.classList.add("active");
        } else {
            navLink.parentElement.classList.remove("active");
        }
    })
});