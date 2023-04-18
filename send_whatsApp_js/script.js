// JavaScript code to handle form submission
const form = document.getElementById('whatsapp-form');
const sentCount = document.getElementById('sentCount');
const listSent = document.getElementById('list');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting normally

  // extract message and phone numbers from form inputs
  const message = encodeURIComponent(document.getElementById('message').value);
  const numbers = document.getElementById('numbers').value.split(',');

  if(numbers == []) {
    console.log(null);
    return;
  }

  // loop through phone numbers and send WhatsApp message
  numbers.forEach(function(number, index) {
    // create URL with message and phone number encoded as parameters
    const url = `whatsapp://send?text=${message}&phone=${encodeURIComponent(number)}`;

    // delay each iteration by 3 seconds
    setTimeout(function() {
      // open URL in new tab or window to send WhatsApp message
      window.location.href = url;
      // set status
      sentCount.innerHTML = `<b>${index + 1}</b>`;
      listSent.innerHTML += `<li>${number} : <a href="${url}">Send Again</a></li>`;

    }, index * 3000); // multiply index by 3000 to delay each iteration by 3 seconds
  });
});