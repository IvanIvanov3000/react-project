// swiper
// var swiper = new Swiper(".bg-slider-thumbs", {
//     loop: true,
//     spaceBetween: 0,
//     slidesPerView: 0
// });
// var swiper2 = new Swiper(".bg-slider", {
//     loop: true,
//     spaceBetween: 0,
//     thumbs: {
//         swiper: swiper,
//     },
// });

//navigation bar effects on scroll
window.addEventListener('load', ()=>{ 
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    
    //responsive navigation menu
    // const menuBtn = document.querySelector(".nav-menu-btn");
    // const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    
    // menuBtn.addEventListener("click", () => {
    //     navigation.classList.add("active");
    // });
    // closeBtn.addEventListener("click", () => {
    //     navigation.classList.remove("active");
    // });

    const signUpBtn = document.querySelector(".sign-up-btn");
    const signInBtn = document.querySelector(".sign-in-btn");
    const signUpForm = document.querySelector(".sign-up-form");
    const signInForm = document.querySelector(".sign-in-form");

    signUpBtn.addEventListener("click", () => {
      signUpForm.classList.add("show");
      signInForm.classList.add("hide");
      signUpForm.classList.remove("hide");
      signInForm.classList.remove("show");

    });

    signInBtn.addEventListener("click", () => {
      signInForm.classList.add("show");
      signUpForm.classList.add("hide");
      signInForm.classList.remove("hide");
      signUpForm.classList.remove("show");
    });
});


