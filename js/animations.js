document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.bounce-in, .fade-in, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});



