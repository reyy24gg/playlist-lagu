// Navigasi tetap solid putih
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 10%";
    } else {
        navbar.style.padding = "15px 10%";
    }
});

// Efek muncul perlahan saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// CSS tambahan untuk animasi lewat JS
const style = document.createElement('style');
style.textContent = `
    .hidden { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
    .show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);