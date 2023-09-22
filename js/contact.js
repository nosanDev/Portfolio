
emailjs.init("hxKcJ4nSL-ZeBcf2R");


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  
  emailjs.sendForm("service_bu75kba", "service_bu75kba", formData)
    .then(function(response) {
      console.log("E-mail sent successfully", response);
    }, function(error) {
      console.error("Failed to send e-mail", error);
    });
});
