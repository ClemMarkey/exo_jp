document.getElementById("go").addEventListener("click", function(){

    let name = prompt("Veuillez entrer un nom");
    console.log(name);
    
    let age = prompt("Veuillez entrer un âge");
    console.log(age);

    let newRow = document.getElementById("tableau").insertRow(-1)

    let newCell = newRow.insertCell(0);
    
    newCell.innerHTML = name;

    newCell = newRow.insertCell(1);

    newCell.innerHTML = age;

    newCell = newRow.insertCell(2);

    function checkAge(age){

        if (age < 18) {
            newCell.innerHTML += "Tu es bien trop jeune, petit.e";
        }else if (age <= 19) {
            newCell.innerHTML += "Bientôt la vingtaine !";
        }else if (age <= 29) {
            newCell.innerHTML += "La vingtaine, y'a que ça de vrai !";
        }else if (age <= 39) {
            newCell.innerHTML += "Les trentenaires sont les meilleurs !";
        } else if (age > 40){
            newCell.innerHTML += "Tu es trop vieux pour jouer, désolé papy !";
        } else {
            newCell.innerHTML += "Vive les extra-terrestres !";
        }
    }
    
    checkAge(age);
});

document.getElementById("del").addEventListener("click", function(){

    deletePerson = prompt("Quelle ligne souhaitez-vous supprimer ?");

    if (isNaN(deletePerson)){
        alert("Veuillez entrer un numéro de ligne valide")
    }else {
        document.getElementById("tableau").deleteRow(deletePerson-1);
    }

});