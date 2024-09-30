document.addEventListener("DOMContentLoaded", function() {
    // Pour récupérer directement les éléments des roues et de la voiture dans le SVG intégré
    const roueAvant = document.getElementById("roueAvant");
    const roueArriere = document.getElementById("roueArriere");
    const voiture = document.getElementById("voiture");

    // Pour animer les roues
    function startRotation() {
        gsap.to([roueAvant, roueArriere], {
            rotate: 360,
            repeat: -1,
            duration: 1,
            ease: "linear"
        });
    }

    function stopRotation() {
        gsap.to([roueAvant, roueArriere], { rotate: 0, duration: 0.5 });
    }

    // Pour déclencher l'animation lorsque la souris passe sur la voiture
    voiture.addEventListener("mouseenter", startRotation);
    voiture.addEventListener("mouseleave", stopRotation);
});
