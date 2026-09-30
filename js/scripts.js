document.addEventListener("DOMContentLoaded", () => {

   const typewriterElement = document.getElementById("typewriter-text");
    const roles = [
        "Cybersecurity Enthusiast",
        "Computer Science Student",
        "Blue Team & SOC Learner"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typewriterElement) return;
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }
        setTimeout(typeEffect, speed);
    }
    typeEffect();


   const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
