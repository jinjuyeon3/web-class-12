document.addEventListener("DOMContentLoaded",function(){
    
    // 태그 선택할 때는 .swiper 대신 우리가 붙힌 클래스명을 사용해주는 것이 좋다.
    const station1 = new Swiper('.station', {
        direction:'vertical',
        loop:true,
        slidesPerView:1.2,
        spaceBetween:'20px',
        speed:1000,
        pagination: {
            el: ".swiper-pagination",
        }
    });

    const station2 = new Swiper('.station2', {
        direction:'horizontal',
        loop:true,
        slidesPerView:1.2,
        spaceBetween:'20px',
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

})


