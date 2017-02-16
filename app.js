;(function () {
    'use strict';

    // import
    let Gallery = window.Gallery;

    let gallery = new Gallery({
        largeItems: [
            'https://js.cx/gallery/img2-lg.jpg',
            'https://js.cx/gallery/img3-lg.jpg',
            'https://js.cx/gallery/img4-lg.jpg',
            'https://js.cx/gallery/img5-lg.jpg',
            'https://js.cx/gallery/img6-lg.jpg',
        ],
        thumbItems: [
            'https://js.cx/gallery/img2-thumb.jpg',
            'https://js.cx/gallery/img3-thumb.jpg',
            'https://js.cx/gallery/img4-thumb.jpg',
            'https://js.cx/gallery/img5-thumb.jpg',
            'https://js.cx/gallery/img6-thumb.jpg',
        ]
    });


    document.body.prepend(gallery.getElement());
})();
