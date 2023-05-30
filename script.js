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
//console.log(carre)

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
            state = false // Pour réinitialiser l'état
        }
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 3//
//////////////////////////////////////////////////////////////////////////////////////////////

const box1 = document.createElement("div")                          //Déclarer l'élément HTML de base et l'instancier avec la fonction createElement 
box1.classList.add("box1")                                          //Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box"
const grille = document.querySelector("#grille")                    //Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)

const box2 = document.createElement("div")                          //Créer un autre élément play pour désigner le tour du joueur
box2.classList.add("box2")
const play = document.querySelector("#play")                        //Déclarer les variables avec "let" avant la boucle for pour que celles ci permettent l'éxcecution des conditions

let currentValue = "X"                                              //(Cette variable affiche "X" initialement)
let messO = "C'est au tour de O !"                                  //(Cette variable affiche ce message pour désigner O)
let messX = "C'est au tour de X !"                                  //(Cette variable affiche ce message pour désigner X)

let nb = 0                                                          //(Cette variable sert de référence pour attribuer un chiffre à chaque éléments)
let jeuFin = document.querySelector("h3").style.display = 'none'    //(Cette variable masque le message (contenu dans la balise HTML "h3") au début de la partie)


for (let i = 1; i <= 9; i++) {                                      //Représenter l'élément HTML de base dans la boucle for
    const newbox = box1.cloneNode()                                 //pour générer 9 éléments du même type automatiquement avec la fonction cloneNode()
    grille.appendChild(newbox)                                      //Pour afficher les éléments HTML de base de la boucle dans l'interface
    let value = false                                               //Valeur de référence type booléan(Cette variable )
                                                                    
    newbox.addEventListener("click", function () {                  //Rendre les éléments de base cliquables en ajoutant un écouteur d'évènements

        console.log("Elément n°" + i + ": click !")                 //Pour afficher dans la consôle les script en vue de contrôler leur bon fonctionnement
        console.log(value)
        console.log(nb)
        console.log(jeuFin)                    
        
        if (!value) {                                               // Si la valeur des éléments de base est vide alors ajouter soit "X" soit "O"
            newbox.classList.add("box1-valid")                      //Pour afficher les éléments modifiés
            newbox.innerText = currentValue                         //Pour afficher les variables "X" et "O" innerText permet d'assimiler la variable currentValue aux 9 éléments
            value = true                                            //Changer le statut pour verrouiller les éléments modifiés
        
            if (currentValue === "O") {                             //Condition pour afficher alternativement au click les deux variables "X" et "O"
                currentValue = "X"                                  //Si la variable vaut "O", la suivante vaudra "X"
                nb++                                                //Pour attribuer un nombre à chaque éléments et pour que le chiffre ne change pas quand on click plusieurs fois sur le même élément
                console.log(play)
                play.appendChild(box2)
                box2.innerText = messX

            } else {                                                
                currentValue = "O"                                  //Sinon le cycle recommence avec la variable vaut "O" et ainsi de suite
                nb++
                console.log(play)
                play.appendChild(box2)
                box2.innerText = messO
            }

            if (nb >= 9 ) {                                         //Cette variable sera de nouveau disponible à l'affichage dès que tous les éléments de base seront modifiés 
                jeuFin = document.querySelector("h3").style.display = 'flex'
                console.log(jeuFin)
                play.removeChild(box2)                              //Le message désignant les joueurs disparait
           }
        }
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////
//EXO 4//
//////////////////////////////////////////////////////////////////////////////////////////////

let cube = document.createElement("div")                        //Déclarer l'élément HTML de base et l'instancier avec la fonction createElement 
cube.classList.add("cube")                                      //Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "cube"
let plan = document.querySelector("#plan")                      //Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)

let ice = 0                                                     //Variable de référence pour incrémenter un nombre à chaque ajout de cubes

document.addEventListener("keydown", function(event) {          //Ajouter un écouteur d'évenements à document pour ajouter un cube avec les touches du clavier
    
    if (event.key == "ArrowDown"){                              //Ajouter event dans une condition pour que l'action se déclenche avec juste la touche flèche du bas du clavier
        
        //console.log("key Pressed");
        //console.log(cube);
        //console.log(ice)
        ice++                                                   //Incrémenter +1 à chaque click            

        let newcube = cube.cloneNode()                          //Variable qui va cloner un cube

        plan.appendChild(newcube).style.backgroundColor = "#"   //Afficher un cube au click et attribuer une couleur aléatoire au style CSS avec .style.backgroundColor

        + (Math.floor(Math.random()*16777215).toString(16))     //Faire un Math.floor d'un chiffre random (entre 0 et 1 * 16m de couleurs) qu'on ressort en tostring (base 16) ce qui sortira une suite de caractères hexadecimaux.
        
        //console.log(newcube)

        newcube.addEventListener("click", function(){           //Rendre les cubes cliquables 

            newcube.style.backgroundColor = "black"             //Changer les cubes en noir au click
            //console.log("Elément: click !")
        })
    }

});

document.addEventListener("keydown", function(event) {          //Ajouter un écouteur d'évenements à document pour supprimer un cube avec les touches du clavier
    
    if (event.key == "ArrowUp"){                                //Ajouter event dans une condition pour que l'action se déclenche avec juste la touche flèche du haut du clavier
        
        console.log("key Pressed");
        console.log(cube);
        console.log(ice)
        ice--                                                   //Décrémenter -1 à chaque click            

        let newcube = cube.cloneNode()                          //Variable qui va cloner un cube
        plan.firstElementChild.remove(newcube)                  //Supprimer un cube au click de la touche flèche haut du clavier
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////