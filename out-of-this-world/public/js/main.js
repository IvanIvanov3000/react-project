window.addEventListener('load', () => {
  //swiper




  //navigation bar effects on scroll

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //responsive navigation menu
  // const menuBtn = document.querySelector(".nav-menu-btn");
  // const closeBtn = document.querySelector(".nav-close-btn");
  // const navigation = document.querySelector(".navigation");

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
  if (signUpBtn && signInBtn) {
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
  }


  // Catalog js
  const catalog = document.querySelector('div#catalog');
  if (catalog) {


    let moon = document.querySelector(".moon");
    let star = document.querySelector(".star")
    let title = document.querySelector("#title");

    console.log(moon, star);
    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      star.style.left = value * 0.2 + "px";
      moon.style.top = 50 + value * 1.05 + "px";


      title.style.marginRight = value * 5 + "px";
      title.style.top = 300 + value * 0.9 + "px";



    });
  }
});


