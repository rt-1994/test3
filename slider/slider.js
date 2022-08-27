$('.footer-block').slick({
    nextArrow:false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: true,
    responsive: [{
        breakpoint: 767,
        settings: "unslick"
    }]
});