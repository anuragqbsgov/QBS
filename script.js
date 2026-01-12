document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
        alert('Message sent successfully!');
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert('Oops! Something went wrong.', error);
    });
});
