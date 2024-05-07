$('.slides').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 880,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});