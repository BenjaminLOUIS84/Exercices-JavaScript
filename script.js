//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 1//
//////////////////////////////////////////////////////////////////////////////////////////////

//Déclarer l'élément HTML à modifier
let carre = document.querySelector(".carre")

//Déclarer un message contenant une liste d'information
//Pour afficher à la ligne chaque informations utiliser \n à la fin

let message = "Class : Carre\n" +
    "-Background-color: rgb(136, 174, 136)\n" +
    "-Color: rgb(255, 255, 255)\n" +
    "-Height: 200\n" +
    "-Width: 200\n" +
    "-Display: flex\n" +
    "-Display: Time New Roman (40px)"


//Vérifier si cet élément est pris en compte dans la console JS
console.log(carre)

//Ajouter à cet élément un écouteur d'évènement pour afficher un message au click
carre.addEventListener("click", function () {

    //Vérifier si l'élément est cliquable dans la console
    console.log("carre click")

    //Générer le message dans l'évènement
    alert(message)

})

//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 2//
//////////////////////////////////////////////////////////////////////////////////////////////

//Par convention déclarer les fonctions en début de code
//(CF Appel de la fonction en fin de code)

//Pour générer une réaction quand l'élément est déjà cliqué
// function showReaction(type, validBox) {
//     validBox.classList.add(type)
//     if (type !== "notice") {
//         setTimeout(function () {
//             validBox.classList.remove(type)
//         }, 400)
//     }
// }

//Déclarer l'élément HTML et l'instancier avec la fonction createElement 

const box = document.createElement("div")

//Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box"

box.classList.add("box")

//Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)
//Autre façon possible avec la fonction getElementByID

const carres = document.querySelector("#carres")

//Représenter l'élément HTML dans une boucle for  
//pour générer 4 éléments du même type automatiquement avec la fonction cloneNode()
//Numéroter ces éléments avec innerText

for (let i = 1; i <= 4; i++) {
    const newbox = box.cloneNode()
    newbox.innerText = i

    //Pour afficher l'élément HTML dans l'interface

    carres.appendChild(newbox)

    //Valeur de référence type booléan

    let state = false

    //Rendre les éléments cliquables en ajoutant un écouteur d'évènements

    newbox.addEventListener("click", function () {

        console.log("Elément n°" + i + ": click !")
        console.log(state)

        //Pour changer la couleur et la forme des éléments au click

        if (!state) { // Si l'état est invalide alors changer l'élément et changer son état

            newbox.classList.add("box-valid")
            state = true

        }
        else {
            // Générer une réaction (CF Fonction en début de code)
            //en cliquant une fois de plus sur l'élément déjà changé 

            newbox.classList.remove("box-valid")
            // showReaction("notice", newbox)
            state = false // Pour réinitialiser l'état
        }

    })

}
//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 3//
//////////////////////////////////////////////////////////////////////////////////////////////

//Déclarer l'élément HTML de base et l'instancier avec la fonction createElement 

const box1 = document.createElement("div")

//Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box"

box1.classList.add("box1")

//Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)

const grille = document.querySelector("#grille")


//Déclarer la variable currentValue en dehors de la boucle for (Cette variable sera affichée dans l'élément modifié)

let currentValue = "X"

//Représenter l'élément HTML de base dans la boucle for pour générer 9 éléments du même type automatiquement avec la fonction cloneNode()

//Assimiler la variable currentValue aux 9 éléments avec innerText pour afficher cette variable au click

for (let i = 1; i <= 9; i++) {
    const newbox = box1.cloneNode()

    //Pour afficher l'élément HTML de base dans l'interface

    grille.appendChild(newbox)

    //Valeur de référence type booléan
    let value = false

    //Rendre les éléments de base cliquables en ajoutant un écouteur d'évènements

    newbox.addEventListener("click", function () {

        console.log("Elément n°" + i + ": click !")
        console.log(value)

        //Pour afficher les deux variables alternativement au click

        if (!value) { // Si la valeur des éléments de base est vide alors ajouter soit "X" soit "O"

            newbox.classList.add("box1-valid")  //Pour afficher les éléments modifiés
            newbox.innerText = currentValue     //Pour afficher les variables "X" et "O"

            value = true                        //Changer le statut pour vérouiller les éléments modifiés

            if (currentValue === "O") {         //Condition pour excécuter l'alternance des deux variables "X" et "O"
                //Si la variable vaut "O", la suivante vaudra "X"
                currentValue = "X"

            } else {                            //Sinon le cycle recommence avec la variable vaut "O" et ainsi de suite
                currentValue = "O"
            }
        }
    })

}

//Déclarer la variable jeuFin en dehors de la boucle for
//(Cette variable masque le message (contenu dans la balise HTML "h3") au début de la partie)

let jeuFin = document.querySelector("h3").style.display = 'none'
console.log(jeuFin)

//(Cette variable sera affichée dès que tous les éléments de base seront modifiés soit à la fin de la partie)
//Pour lever la modification de cette balise écrire la condition ci dessous

if (grille.children.length = false) {
    
    jeuFin = document.querySelector('h3').style.display= 'flex'
    //jeuFin = document.remove('h3')
    console.log(jeuFin)
}

/////////////////////////////////////////////////////////////////////






