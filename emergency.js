const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "niteshgunu@gmail.com",
    Password: "75E3C25F90587699CF116E2B48A5733329DE",
    To: "niteshgunu@gmail.com",
    From: "niteshgunu@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
