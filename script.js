//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 1//
//////////////////////////////////////////////////////////////////////////////////////////////

//Déclarer l'élément HTML à modifier
let carre = document.querySelector(".carre")

//Déclarer un message contenant une liste d'information
//Pour afficher à la ligne chaque informations utiliser \n à la fin

let message = "Class : Carre\n"+
"-Background-color: rgb(136, 174, 136)\n"+
"-Color: rgb(255, 255, 255)\n"+
"-Height: 200\n"+
"-Width: 200\n"+
"-Display: flex\n"+
"-Display: Time New Roman (40px)"


//Vérifier si cet élément est pris en compte dans la console JS
console.log(carre)

//Ajouter à cet élément un écouteur d'évènement pour afficher un message au click
carre.addEventListener("click", function(){

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
function showReaction(type, validBox) {
    validBox.classList.add(type)
    if (type !== "notice") {
        setTimeout(function () {
            validBox.classList.remove(type)
        }, 400)
    }
}

//Déclarer l'élément HTML et l'instancier avec la fonction createElement 
const box = document.createElement("div")

//Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box"
box.classList.add("box")


//Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)
//Autre façon possible avec la fonction getElementByID
const carres = document.querySelector("#carres")
let nb = 1

//Représenter l'éléement HTML dans une boucle for  
//pour générer 4 éléments du même type automatiquement avec la fonction cloneNode()
//Numéroter ces éléments avec innerText

for (let i = 1; i <= 4; i++) {
    const newbox = box.cloneNode()
    newbox.innerText = i

    //Pour afficher l'élément HTML dans l'interface
    carres.appendChild(newbox)

    //Rendre les éléments cliquables
    newbox.addEventListener("click", function () {
        console.log("Elément n°" + i + ": click !")
        


        //Pour changer la couleur et la forme des éléments au click

        if (i === nb) { //L'ordre des chiffres doit être respecté pour que cela fonctionne
            
            newbox.classList.add("box-valid")

            //Pour que le changement s'applique à tous les éléments 
            nb++

        }
        else {
            // Générer une reaction quand l'élément est déjà cliqué
            //(remise à l'état d'origine)(CF Fonction en début de code)

            showReaction("notice", newbox)
            
        }

    })

}

//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 3//
//////////////////////////////////////////////////////////////////////////////////////////////











