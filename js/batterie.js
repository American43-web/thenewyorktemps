document.addEventListener("DOMContentLoaded", function() {
    // Pour initialiser Snap.svg et définir la taille du canvas
    const s = Snap("#battery");

    // Les dimensions de la batterie
    const batteryWidth = 150;
    const batteryHeight = 60;
    const batteryStrokeWidth = 5;

    // Pour créer le rectangle principal pour représenter la batterie
    const batteryRect = s.rect(batteryStrokeWidth, batteryStrokeWidth, batteryWidth, batteryHeight).attr({
        fill: "none",
        stroke: "#000",
        strokeWidth: batteryStrokeWidth,
        rx: 5,  // Pour les coins arrondis
        ry: 5
    });

    // Pour créer un capuchon pour la batterie
    const batteryCap = s.rect(batteryWidth + batteryStrokeWidth, 20, 10, 20).attr({
        fill: "#000"
    });

    // Pour créer le rectangle de remplissage de la batterie
    const batteryLevel = s.rect(batteryStrokeWidth + 1, batteryStrokeWidth + 1, 0, batteryHeight - 2).attr({
        fill: "#4CAF50" // couleur verte pour la jauge
    });

    // Pour animer la jauge de batterie (se remplit lorsque la souris passe dessus)
    const batteryContainer = document.getElementById("battery-container");
    batteryContainer.addEventListener("mouseenter", function() {
        batteryLevel.animate({ width: batteryWidth - 2 }, 2000);  // Pour remplir la jauge en 2 secondes
    });

    //Pour vider la batterie lorsque la souris se retire
    batteryContainer.addEventListener("mouseleave", function() {
        batteryLevel.animate({ width: 0 }, 2000);  // Pour vider la jauge en 2 secondes
    });
});
