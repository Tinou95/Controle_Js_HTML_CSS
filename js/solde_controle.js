document.addEventListener("DOMContentLoaded", () => {
    console.log("Chargé.");
    let solde, somme, retrait;

    afficher = document.querySelector("section p");
    solde = 1000;
    somme = prompt("Faites un retrait compris entre 20 et 100 €");
    confirmer = confirm("Confirmer votre retrait : ");

    if (somme >= 20 && somme <= 100) {
        if (confirmer) {

            afficher.innerText = "Votre solde est désormais  de :" + " " + solde + " - " + somme + " = " + (solde - somme) + " €.";
            afficher.classList.add("success");
        } else {
            afficher.innerText = "Echec de l'Opération ";
            afficher.classList.add("warning");
        }
    }
    if (somme < 20 || somme > 100) {
        alert("L'opération ne peut pas être effectuer veuillez saisir une retrait valables, " + somme + " n'est pas valable");
        document.location.reload();
    }
});