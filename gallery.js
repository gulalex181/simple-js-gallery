;(function () {
    'use strict';

    class Gallery {
        constructor(options) {
            this._element = null;
            this._largeItems = options.largeItems;
            this._thumbItems = options.thumbItems;
        }

        _load() {
            for (let i = 0; i < this._largeItems.length; i += 1) {
                let img = document.createElement('img');
                img.src = this._largeItems[i];
            }
        }

        _gallOnClick(event) {
            event.preventDefault();

            let target = event.target;
            let link = target.closest('.gallery__link');

            if (!link || !this._element.contains(link)) return;

            this._gallLargeViewImg.src = link.href;
        }

        _render() {
            let gall = document.createElement('div');
            gall.className = 'gallery';

            let gallLargeView = document.createElement('div');
            gallLargeView.className = 'gallery__large';
            gall.append(gallLargeView);

            let gallLargeViewImg = document.createElement('img');
            gallLargeViewImg.className = 'gallery__large-img';
            gallLargeViewImg.setAttribute('src', this._largeItems[0]);
            gallLargeView.append(gallLargeViewImg);

            let gallList = document.createElement('ul');
            gallList.className = 'gallery__list';
            gall.append(gallList);

            gallList.addEventListener('click', this._gallOnClick.bind(this));

            for (let i = 0; i < this._largeItems.length; i += 1) {
                let gallListItem = document.createElement('li');
                gallListItem.className = 'gallery__item';
                gallList.append(gallListItem);

                let gallListLink = document.createElement('a');
                gallListLink.className = 'gallery__link';
                gallListLink.setAttribute('href', this._largeItems[i]);
                gallListItem.append(gallListLink);

                let gallListThumb = document.createElement('img');
                gallListThumb.className = 'gallery__thumb';
                gallListThumb.setAttribute('src', this._thumbItems[i]);
                gallListLink.append(gallListThumb);
            }

            this._gallLargeViewImg = gallLargeViewImg;
            this._element = gall;
        }

        getElement() {
            this._load();
            if (!this._element) this._render();
            return this._element;
        }
    }

    // export
    window.Gallery = Gallery;
})();
