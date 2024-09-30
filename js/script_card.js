/* -- déclaration et affectation des variables contenant les données ou les options --*/
let map; 
let marqueurs = []; // Contiendra les marqueurs des bornes de recharge

/* --déclaration des variables globales --*/
let CoordonnesParis = [48.8566, 2.3522]; // Coordonnées de Paris
let niveauZoom = 12; // Niveau de zoom par défaut

/* -- déclaration des fonctions classiques --*/
function initMap() {
    // Initialise la carte centrée sur Paris
    map = L.map('map').setView(CoordonnesParis, niveauZoom);

    // Ajoute une couche OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
    }).addTo(map);

    // Charger les bornes depuis le fichier CSV
    chargerBornesDeCSV();
}

// Fonction pour ajouter un marqueur sur la carte
function ajouterMarqueur(lat, lon, nomStation, adresseStation, nbrePdc) {
    // Créer le texte à afficher dans la popup
    let popupTexte = `<strong>${nomStation}</strong><br>Adresse: ${adresseStation}<br>Nombre de points de charge: ${nbrePdc}`;
    let marqueurs = L.marker([lat, lon]).addTo(map).bindPopup(popupTexte);
    marqueurs.push(marqueurs); // Ajouter le marqueur à la liste globale
}

// Fonction pour charger les données des bornes depuis un fichier CSV
function chargerBornesDeCSV() {
    Papa.parse("js/data/bornes_paris.csv", {
        download: true,
        header: true,
        delimiter: ";",
        complete: function(results) {
            results.data.forEach(function(borne) {
                ajouterMarqueur(borne.lat, borne.long, borne.nom_station, borne.adresse_station, borne.nbre_pdc);
            });
        },
        error: function(error) {
            console.error('Erreur lors du chargement du fichier CSV:', error);
        }
    });
}


/* -- déclaration des fonctions de callback--*/
function init() {
    chargerBornesDeCSV();
    initMap(); 
}

/* --quand le DOM a été entièrement chargé, on peut appeler la fonction d'initialisation-- */
window.addEventListener("load", init);
