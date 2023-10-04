/* ---------- app.js for Portfolio Webnono ----------*/

function SendMail() {
  const params = {
    from_name : document.getElementById('fullName').value,
    email_id : document.getElementById('email_id').value,
    message : document.getElementById('message').value
  };
  emailjs.send('service_7j2j76u', 'service_7j2j76u', params).then(function (res) {
    alert(`Sucees !${  res.status}`);
  });
}


















// -- Modal --


// const img = document.getElementById('item_01');
// const modal = document.getElementById('Modal');
// const modalImg = document.getElementById('modalImage');

// img.onclick = function(){
//     modal.style.display = 'block';
//     modalImg.src = this.src;
// };

// const span = document.getElementsByClassName('close')[0];
// span.onclick = function() {
//   modal.style.display = 'none';
// };
