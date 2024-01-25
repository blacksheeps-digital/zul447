document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-slider', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        lazyLoad: 'nearby',
    });

    var thumbnails = new Splide('#thumbnail-slider', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        focus: 'center',
        breakpoints: {
            600: {
                fixedWidth: 100,
                fixedHeight: 65,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});