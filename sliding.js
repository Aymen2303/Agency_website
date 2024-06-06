var navlinks = document.getElementById("navLinks")

function showMenu() {
    navlinks.style.right = "0"
}

function hideMenu() {
    navlinks.style.right = "-200px"
}


document.addEventListener("DOMContentLoaded", function() {
    const mediaItems = document.querySelectorAll('.list-unstyled .media');

    const isVisible = (elem) => {
        const { top, bottom } = elem.getBoundingClientRect();
        const vHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (
            (top > 0 || bottom > 0) &&
            top < vHeight
        );
    };

    const checkVisibility = () => {
        mediaItems.forEach(item => {
            if (isVisible(item)) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});