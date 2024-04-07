// script.js

function saveDataToJson() {
    // Récupérer les valeurs saisies par l'utilisateur
    var name = document.getElementById('nameField').value;
    var email = document.getElementById('emailField').value;

    // Créer un objet JavaScript avec les données saisies
    var userData = {
        name: name,
        email: email
    };

    // Effectuer une requête POST vers le serveur
    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        console.log('Données envoyées avec succès au serveur');
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}
