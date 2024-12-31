function handleHamburgerClick() {
    const HamburgerDropDownMenu = document.querySelector("#HamburgerMenuDropDown");
    if (HamburgerDropDownMenu.style.display === "none") {
        HamburgerDropDownMenu.style.display = "block";
    } else if (HamburgerDropDownMenu.style.display === "block") {
        HamburgerDropDownMenu.style.display = "none";
    }
}

window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll(".ContentPanel");
    const mobileNavTitle = document.querySelector("#MobileNavActiveSection");
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href='#${section.id}']`);
        if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().bottom > window.innerHeight / 2) {
            navLink.parentElement.classList.add("active");
            mobileNavTitle.textContent = navLink.textContent;
        } else {
            navLink.parentElement.classList.remove("active");
        }
    })
});

const HamburgerSVG = document.querySelector("#HamburgerMenuIcon");
HamburgerSVG.addEventListener("click", handleHamburgerClick);
