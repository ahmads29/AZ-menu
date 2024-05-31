document.getElementById('nextBtn').addEventListener('click', function() {
    document.querySelector('.shark_menu-items-container').scrollBy({
        left: 200, // Adjust the scroll distance
        behavior: 'smooth'
    });
});

document.getElementById('prevBtn').addEventListener('click', function() {
    document.querySelector('.shark_menu-items-container').scrollBy({
        left: -200, // Adjust the scroll distance
        behavior: 'smooth'
    });
});

