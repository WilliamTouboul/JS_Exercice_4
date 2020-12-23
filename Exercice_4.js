function showAlert() {
    var breakline = "\r\n";
    var regex = new RegExp("^[a-zA-Z0-9\- ]+$");

    var lastName = document.getElementById("lastname").value;
    var firstName = document.getElementById("firstname").value;
    var city = document.getElementById("city").value;


    if (!regex.test(lastName)) {
        alert('Saisie du nom non valide');
    } else {
        if (!regex.test(firstName)) {
            alert('Saisie du prénom non valide');
        } else {
            if (!regex.test(city)) {
                alert('Saisie de la ville non valide');
            } else {
                alert('Nom : ' + lastName + breakline + 'prénom : ' + firstName + breakline + 'Ville : ' + city);
            }
        }

    }





};