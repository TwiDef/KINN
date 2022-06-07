'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const toolIcons = document.querySelectorAll('.header__tools_item');

    toolIcons.forEach((event) => {
        event.addEventListener('mouseover', function() {
            event.classList.add('animate__animated');
        });
        event.addEventListener('mouseout', function() {
            event.classList.remove('animate__animated');
        });
    });

    class CollectionCard {
        constructor(src, alt, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="collection__card">
                    <div class="collection__card-photo"><img src=${this.src} alt=${this.alt}></div>
                    <div class="collection__card-descr">${this.descr}</div>
                    <div class="collection__card-price">${this.price}</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    new CollectionCard(
        "img/board_short.png",
        "img",
        "Maple Board - Short",
        "$99.00",
        ".container .collection__wrapper"
    ).render();
    new CollectionCard(
        "img/board_long.png",
        "img",
        "Maple Board - Long",
        "$125.00",
        ".container .collection__wrapper"
    ).render();
    new CollectionCard(
        "img/board_wide.png",
        "img",
        "Maple Board - Wide",
        "$158.00",
        ".container .collection__wrapper"
    ).render();

});