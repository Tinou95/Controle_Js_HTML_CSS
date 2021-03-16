  document.addEventListener("DOMContentLoaded", () => {
  let age, prenom, paragraphe, submit,time, warning, year;
  paragraphe = document.querySelector("section p");
  warning = document.querySelector("section");
  footer = document.querySelector("footer p");
  time = new Date();

  class User {
      constructor(prenom,age) {
          this.prenom = document.getElementsByTagName("input")[0].value;
          this.age = document.getElementsByTagName("input")[1].value;
      }
      envoie() {

          return `${this.prenom} : ${this.age}`;
      }
      test() {
          if (this.prenom && this.age) {
              year = time.getFullYear() - this.age;
              paragraphe.innerText = ` Bonjour ${this.prenom} vous êtes né en ${year} `;
              warning.classList.remove("warning");
              warning.classList.add("success");
          } else {
              paragraphe.innerText = ` Saisissez tout les champs !! `;
              warning.classList.remove("success");
              warning.classList.add("warning");
          }
      }
  }
  submit = document.getElementsByTagName("input")[2];
  submit.addEventListener("click", (e) => {
      e.preventDefault();
      let createUser = new User(prenom,age);
      createUser.test();
  });
  footer.innerText += ` -- Quentin -- ${time.getFullYear()}`;
});
