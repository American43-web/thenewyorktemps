// Ici se trouvent les données provenant du fichier Excel
const data = [
  { année: "2020", electrique: 222, gaz: 1, particulier: 65023 },
  { année: "2021", electrique: 2094, gaz: 13, particulier: 375480 },
  { année: "2022", electrique: 2273, gaz: 6, particulier: 284840 },
  { année: "2023", electrique: 3808, gaz: 17, particulier: 337659 },
  { année: "2024", electrique: 1072, gaz: 1, particulier: 40289 }
];

const s = Snap("#chart");

const chartWidth = 600;
const chartHeight = 400;
const margin = 50;
const barWidth = (chartWidth - 2 * margin) / data.length / 3;
const maxYValue = Math.max(...data.map(d => Math.max(d.electrique, d.gaz, d.particulier)));
const scaleY = (chartHeight - 2 * margin) / maxYValue;

// Affichage des échelles sur le côté gauche
const yScaleStep = 50000; // Échelle pour les véhicules
const numYScale = Math.ceil(maxYValue / yScaleStep);

for (let i = 0; i <= numYScale; i++) {
  const y = chartHeight - margin - (i * yScaleStep * scaleY);
  s.text(20, y + 5, i * yScaleStep).attr({ textAnchor: "end" });
  s.line(margin, y, chartWidth - margin, y).attr({ stroke: "#ccc" });
}

// Pour dessiner les barres et ajouter des informations précises lors du passage de la souris
data.forEach((d, i) => {
  const x = margin + i * 3 * barWidth;
  const yElectrique = chartHeight - margin - d.electrique * scaleY;
  const yGaz = chartHeight - margin - d.gaz * scaleY;
  const yParticulier = chartHeight - margin - d.particulier * scaleY;

  // Barres pour les véhicules électriques
  const barElectrique = s.rect(x, chartHeight - margin, barWidth, 0).attr({ class: "bar" });
  barElectrique.animate({ height: d.electrique * scaleY, y: yElectrique }, 1000);

  // Barres pour les véhicules à gaz
  const barGaz = s.rect(x + barWidth, chartHeight - margin, barWidth, 0).attr({ class: "bar-gaz" });
  barGaz.animate({ height: d.gaz * scaleY, y: yGaz }, 1000);

  // Barres pour les véhicules particuliers
  const barParticulier = s.rect(x + 2 * barWidth, chartHeight - margin, barWidth, 0).attr({ class: "bar-particulier" });
  barParticulier.animate({ height: d.particulier * scaleY, y: yParticulier }, 1000);

  // Ajouter les années en bas de chaque barres
  s.text(x + barWidth, chartHeight - margin + 20, d.année).attr({ textAnchor: "middle" });

  // Fonction pour créer une bulle d'information lors du passage de la souris
  function showTooltip(bar, text) {
      const tooltip = s.text(0, 0, text).attr({
          fill: "#fff",
          textAnchor: "middle",
          opacity: 0,
          fontSize: "12px",
          pointerEvents: "none"
      });
      const bbox = tooltip.getBBox();
      const rect = s.rect(bbox.x - 5, bbox.y - 5, bbox.width + 10, bbox.height + 10).attr({
          fill: "#333",
          opacity: 0,
          rx: 5,
          ry: 5
      });

      bar.hover(() => {
          rect.attr({ x: bar.getBBox().cx - bbox.width / 2, y: yElectrique - 40 });
          tooltip.attr({ x: bar.getBBox().cx, y: yElectrique - 25 });
          rect.animate({ opacity: 0.8 }, 200);
          tooltip.animate({ opacity: 1 }, 200);
      }, () => {
          rect.animate({ opacity: 0 }, 200);
          tooltip.animate({ opacity: 0 }, 200);
      });
  }

  // Ajout des informations précises dans les bulles
  showTooltip(barElectrique, `Électrique (${d.année}): ${d.electrique}`);
  showTooltip(barGaz, `Gaz (${d.année}): ${d.gaz}`);
  showTooltip(barParticulier, `Particulier (${d.année}): ${d.particulier}`);
});
