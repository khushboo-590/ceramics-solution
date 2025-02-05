$(document).ready(function () {
    $('.my-file').slick({
        dots: true,
        infinite: true,
        // speed: 50,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    });
});


let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
    let activeNav = menuList.hasAttribute("class", "show");
    if (activeNav) { menuIcon.classList.toggle("active") };
})
