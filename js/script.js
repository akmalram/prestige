window.addEventListener('load', () => {

    const navbaronScroll = () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0) {
                document.querySelector('.navbar').classList.add('scrolled');
            } else if(window.scrollY === 0) {
                document.querySelector('.navbar').classList.remove('scrolled');
            }
        });
    }

    navbaronScroll();
});