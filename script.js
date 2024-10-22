
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Tous les champs sont requis.');
    } else if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
    } else {
        alert('Merci de votre message !');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}



