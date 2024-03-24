const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
const subject = document.getElementById("subject");
const bodyMessage = `Name: ${nameElement.value}<br> Email: ${emailElement.value}<br> Phone: ${phoneElement.value}<br> Subject: ${subjectElement.value}`;
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "username",
  Password: "password",
  To: "them@website.com",
  From: "you@isp.com",
  Subject: "This is the subject",
  Body: bodyMessage,
}).then((message) => alert(message));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
