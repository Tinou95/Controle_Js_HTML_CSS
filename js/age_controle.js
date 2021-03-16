document.addEventListener("DOMContentLoaded", () => {
  console.log("charger");
  let entrer, entrer2, date, datee, birthday, valider, envoyer, age, prenom;
  entrer = document.querySelector("section");
  entrer2 = document.querySelector(" p");
  age = document.getElementById("age").value;
  prenom = document.getElementById("prenom").value;
  footer = document.querySelector("footer p");
  date = new Date();
  datee = date.getFullYear();

  const Utilisateur = {
    construct(age, prenom) {
      this.age = age;
      this.prenom = prenom;
    }

  };
  submit = document.getElementsByTagName("input")[2];
  submit.addEventListener("click", e => {
    e.preventDefault();

    let utilisateur1 = Object.create(Utilisateur);
    utilisateur1.construct(age, prenom);
    birthday = datee - utilisateur1.age;
    if (!prenom && !age) {
      entrer2.innerText = `Les champs ne sont pas remplis correctement!`;
      entrer.classList.add("warning");
      entrer.classList.remove("success");
    } else {
      entrer2.innerText = `Bonjour ${utilisateur1.prenom} vous êtes né en ${birthday}`;
      entrer.classList.add("success");
      entrer.classList.remove("warning");
    }
  });
  footer.innerText += ` -- Quentin -- ${datee}`;
});