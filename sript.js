// Gestion de l'interactivité responsive du menu Mobile 
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("open");

        const bars = mobileMenu.querySelectorAll(".bar");
        if (mobileMenu.classList.contains("open")) {
            bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });
}

// Animation du lien actif de la navbar lors du défilement (Scroll Spy)
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 90) {
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links");

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener("click", () => {
            // Bascule les classes actives pour le menu et l'animation du bouton
            mobileMenuBtn.classList.toggle("active");
            navLinksContainer.classList.toggle("active");
        });

        // Ferme automatiquement le menu si on clique sur un lien (Utile pour l'index)
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                navLinksContainer.classList.remove("active");
            });
        });
    }

    
    // Gère le formulaire de la page d'accueil OU de la page contact dédiée
    const contactForm = document.getElementById("portfolio-form") || document.getElementById("portfolio-form-page");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Récupération des données du formulaire proprement grâce aux attributs 'name'
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
            };

            // Zone prête pour l'intégration de votre logique EmailJS
            console.log("Données prêtes à être envoyées :", data);

            // Exemple de feedback visuel utilisateur temporaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Merci ${data.name}, votre message a bien été simulé !`);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset(); // Vide le formulaire
            }, 1500);
        });
    }
});