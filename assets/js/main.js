document.addEventListener('DOMContentLoaded', function() {
    function handleResize() {
        const col1 = document.querySelector('.col-1');
        const col2 = document.querySelector('.col-2');
        const featuredWords = document.querySelector('.featured-words');
        const submitButton = document.querySelector('.submit');

        if (window.innerWidth <= 892) {
            if (!col2.contains(featuredWords)) {
                col2.appendChild(featuredWords);
            }
        } else {
            if (!col1.contains(featuredWords)) {
                col1.appendChild(featuredWords);
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Run on page load
});
