document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarCenter = document.getElementById('navbar-center');

    navbarToggle.addEventListener('click', function() {
        navbarCenter.style.display = navbarCenter.style.display === 'flex' ? 'none' : 'flex';
    });
});