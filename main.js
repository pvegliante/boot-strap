// http://fvi-grad.com:4004/email

var x = document.querySelectorAll('li a');
var redButton = document.getElementById('BigRedButton');
redButton.addEventListener('click', function() {
  console.log(x[0]);
  x[0].classList.add('yellow-button');
  x[1].classList.add('yellow-button');
  x[2].classList.add('yellow-button');
  x[3].classList.add('yellow-button');
});

var form = $('#form');
var sendBtn = $('#send-btn');
var $spin = $('#dice');


setInterval(function(spin){
  $spin.attr('src', './images/Dodecahedron3.gif');
}, 1800);


form.submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: 'http://fvi-grad.com:4004/email',
    method: 'POST',
    data: form.serialize()
  })
  .done(function() {
    sendBtn.val('Message Sent');
  })
  .fail(function() {
    sendBtn.val('Message Failed');
  })
});
