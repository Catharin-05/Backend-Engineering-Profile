const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click',()=>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

function reloadPage() {
    window.location.reload();
}