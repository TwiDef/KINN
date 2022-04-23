const toolIcons = document.querySelectorAll('.header__tools_item');

toolIcons.forEach((event) => {
    event.addEventListener('mouseover', function() {
        event.classList.add('animate__animated');
    });
    event.addEventListener('mouseout', function() {
        event.classList.remove('animate__animated');
    });
});