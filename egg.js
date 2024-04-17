// Fonction de détection du code de triche
function cheatCodeDetector(inputSequence) {
    var cheatCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA", "Enter"];
    var cheatCode2 = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyQ", "Enter"];
    if (inputSequence.length < cheatCode.length) {
        return false;
    }
    if (inputSequence.length < cheatCode2.length) {
        return false;
    }
    for (var i = 0; i < inputSequence.length - cheatCode.length + 1; i++) {
        if (inputSequence.slice(i, i + cheatCode.length).join(',') === cheatCode.join(',')) {
            return true;
        }else if (inputSequence.slice(i, i + cheatCode2.length).join(',') === cheatCode2.join(',')) {
            return true;
        }
    }
    return false;
}

// Fonction à exécuter lorsque le code de triche est entré
function sheet01() {
    document.querySelector("#eggTitle").textContent = "Sortez moi de prison !";
    document.querySelector("#eggDesc").textContent = "Ceux qui m'ont mis là vous mentent ! JE SUIS INNOCENT !";
    document.querySelector("#eggBtn").textContent = "Rapport d'enquête";
    document.querySelector("#eggBtn").title = "Tu ne veux pas savoir ce qu'il y a dedans...";
    document.querySelector("#eggBtn").disabled = false;
    document.querySelector("#eggBtn").onclick = function() {
        window.open('./assets/ClassifiedReport[TOP_SECRET].pdf', '_blank');
        setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }, 3000);
    }
}
// Gestionnaire d'événement pour la pression des touches
var pressedKeys = [];
document.addEventListener('keydown', function(event) {
    pressedKeys.push(event.code);
    console.log(pressedKeys);
    if (cheatCodeDetector(pressedKeys)) {
        sheet01();
        // Remise à zéro de la séquence de touches après l'activation du code de triche
        pressedKeys = [];
    }
});
