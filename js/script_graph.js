/* -- déclaration et affectation des variables contenant les données ou les options --*/
/* --déclaration des variables globales --*/
let s1,g1;
let s2,g2;

/* -- déclaration des fonctions classiques --*/
function chargerSvg1(){
   
    var s = Snap("#graphe1");

    Snap.load("images/Graphe Bornes.svg", function (fragment) {
        s.append(fragment);
    
        // Créer un infoBulle
        var infoBulle = s.text(100, 100, "")
            .attr({
                fill: "#000",
                fontSize: 16,
                display: "none", 
                fontWeight: "bold",
            });
    
        // Fonction pour configurer le infoBulle pour chaque barre
        function configurationInfoBulle(barreId, info) {
            var barre = s.select(`#${barreId}`);
    
            if (barre) {
                barre.hover(
                    function () { // Fonction appelée au survol
                        // Mettre à jour le contenu du infoBulle
                        infoBulle.attr({
                            text: info,
                            display: "block"
                        });
    
                        // Mettre à jour la position du infoBulle
                        var position = barre.getBBox();
                        infoBulle.attr({
                            x: position.x - position.width / 2 - infoBulle.getBBox().width / 2,
                            y: position.y + 50 
                        });
                    },
                    function () { // Fonction appelée lorsque le curseur sort de l'élément
                        // Cacher le infoBulle
                        infoBulle.attr({
                            display: "none"
                        });
                    }
                );
            } 
        }
    
        // Configurer les infoBulles pour chaque barre
        configurationInfoBulle("barre_2020", "463 Bornes");
        configurationInfoBulle("barre_2021", "2617 Bornes");
        configurationInfoBulle("barre_2022", "3786 Bornes");
        configurationInfoBulle("barre_2023", "4047 Bornes");
        configurationInfoBulle("barre_2024", "4052 Bornes");
    }); 
}

function chargerSvg2(){
  
    var s = Snap("#graphe2");

    Snap.load("images/Graphe Voitures.svg", function (fragment) {
        s.append(fragment);
    
        // Créer un infoBulle
        var infoBulle = s.text(100, 100, "")
            .attr({
                fill: "#000",
                fontSize: 16,
                display: "none", 
                fontWeight: "bold",
            });
    
        // Fonction pour configurer le infoBulle pour chaque barre
        function configurationInfoBulle(barreId, info) {
            var barre = s.select(`#${barreId}`);
    
            if (barre) {
                barre.hover(
                    function () { // Fonction appelée au survol
                        // Mettre à jour le contenu du infoBulle
                        infoBulle.attr({
                            text: info,
                            display: "block"
                        });
    
                        // Mettre à jour la position du infoBulle
                        var position = barre.getBBox();
                        infoBulle.attr({
                            x: position.x - position.width / 2 - infoBulle.getBBox().width / 2,
                            y: position.y + 50 
                        });
                    },
                    function () { // Fonction appelée lorsque le curseur sort de l'élément
                        // Cacher le infoBulle
                        infoBulle.attr({
                            display: "none"
                        });
                    }
                );
            } 
        }
    
        // Configurer les infoBulles pour chaque barre
        configurationInfoBulle("barre_2020_c", "56350 Voitures");
        configurationInfoBulle("barre_2021_c", "561382 Voitures");
        configurationInfoBulle("barre_2022_c", "625692 Voitures");
        configurationInfoBulle("barre_2023_c", "668989 Voitures");
        configurationInfoBulle("barre_2024_c", "671881 Voitures");
    });
    
}

/* -- déclaration des fonctions de callback--*/
function init() {
    chargerSvg1(); 
    chargerSvg2(); 
}

/* --quand le DOM a été entièrement chargé, on peut appeler la fonction d'initialisation-- */
window.addEventListener("load", init);
