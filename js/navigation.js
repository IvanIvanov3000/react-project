export default function navigationMove(){
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        console.log(header);
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    
    //responsive navigation menu
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    
    console.log(menuBtn, closeBtn, navigation)
    
    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
}

