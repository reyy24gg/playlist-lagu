// Mengubah tampilan Navbar saat Scroll
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.padding = "10px 10%";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.padding = "20px 10%";
        navbar.style.boxShadow = "none";
    }
});

// Efek Muncul Saat Scroll (Scroll Reveal)
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// Tambahkan CSS sederhana untuk animasi reveal secara dinamis
const style = document.createElement('style');
style.textContent = `
    .fade-in-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .appear {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);