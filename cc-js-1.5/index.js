
/*
    Créer une fonction qui convertit une note provenant du système de notation français
    en note au format de notation américaine
        - Une note francaise est un entier compris entre 0 et 20
        - Un note américaine est une lettre entre A et F

    Vous trouverez ci-dessous l'équivalence entre les 2 systèmes:
        - note comprise entre 0 et 4 -> F
        - note comprise entre 4 incluse et 6 -> E
        - note comprise entre 6 incluse et 9 -> D
        - note comprise entre 9 incluse et 12 -> C
        - note comprise entre 12 incluse et 15 -> B
        - note comprise entre 15 incluse et 20 -> A

     Cette fonction devra aussi prendre en paramètre le nom de l'élève

    Tests à réaliser:
        Pour l'élève John doe ayant une note de 18 -> "John Doe you have received A grade"
        Pour l'élève John doe ayant une note de 12 -> "John Doe you have received B grade"
        Pour l'élève John doe ayant une note de 9 -> "John Doe you have received C grade"
        Pour l'élève John doe ayant une note de 7 -> "John Doe you have received D grade"
        Pour l'élève John doe ayant une note de 5 -> "John Doe you have received E grade"
        Pour l'élève John doe ayant une note de 2 -> "John Doe you have received F grade"
        Pour l'élève John doe ayant une note de 34 -> "Invalid mark value"
 */
function convertMarkFrToUS(nomEleve,noteFr) {
    let noteAmericaine = ""
    if (noteFr<4){
        noteAmericaine = "F"
    }
    else if (noteFr>=4 && noteFr<6){
        noteAmericaine = "E"
    }
    else if (noteFr>=6 && noteFr<9){
        noteAmericaine = "D"
    }
    else if (noteFr>=9 && noteFr<12){
        noteAmericaine = "C"
    }
    else if (noteFr>=12 && noteFr<15){
        noteAmericaine = "B"
    }
    else if (noteFr>=15 && noteFr<=20){
        noteAmericaine = "A"
    }
    if (noteFr<0 || noteFr>20){
        return "Invalid mark value"
    }
    else {
        return nomEleve + " you have received " + noteAmericaine + " grade"
    }
}
console.log(convertMarkFrToUS("John doe",18))
console.log(convertMarkFrToUS("John doe",12))
console.log(convertMarkFrToUS("John doe",9))
console.log(convertMarkFrToUS("John doe",7))
console.log(convertMarkFrToUS("John doe",5))
console.log(convertMarkFrToUS("John doe",2))
console.log(convertMarkFrToUS("John doe",34))
/*
    Créer une fonction qui permet faire des calculs entre entiers,
    le type d'opération sera passé en paramètre.
    Les opérations disponible sont les suivantes:
        - Addition
        - Soustraction
        - Multiplication
        - Division
    Tests à réaliser:
        L'addition de 10 + 25 -> "Sum of 15 and 10 is 25"
        La soustraction de 20 - 8 -> "Difference of 20 and 8 is 12"
        La multiplication de 12 * 4 -> "Product of 12 and 4 is 48"
        La division de 28 par 7 -> "Division of 28 and 7 is 4"
        Toute autre opération devra retourner -> "<nom de l'opération> is an invalid operation"
     */
function calculate(nb1,nb2,operation) {
    let result = 0
    if (operation === "Sum"){
        result = nb1+nb2
    }
    else if (operation === "Difference"){
        result = nb1-nb2
    }
    else if (operation === "Product"){
        result = nb1*nb2
    }
    else if (operation === "Division"){
        result = nb1/nb2
    }
    else {
        return operation+" is an invalid operation"
    }
    return operation+" of "+nb1+" and "+nb2+" is "+result
}
console.log(calculate(10,15,"Sum"))
console.log(calculate(20,8,"Difference"))
console.log(calculate(12,4,"Product"))
console.log(calculate(28,7,"Division"))
console.log(calculate(10,25,"autre"))


/*
    Créer une fonction permettant de supprimer un element d'un tableau tout deux passés en paramètre
    La fonction retournera le tableau modifié.
    tests à réaliser:
       - Suppression de la valeur 78 -> [23,56,4,5,63,45,210,56]
       - Suppression de la valeur 210 -> [23,56,4,78,5,63,45,56]
       - Suppression de la valeur 413 -> Valeur introuvable
 */
let data = [23,56,4,78,5,63,45,210,56];
function deleteElement(tab,elementTab) {
    const index = tab.indexOf(elementTab)
    const x = tab.splice(index, 1)
    return tab
}
console.log(deleteElement(data,78))
console.log(deleteElement(data,210))
//console.log(deleteElement(data,413))


/*
    Créer une fonction qui retourne un tableau contenant les nombres de 1 à 20 dans l'ordre croissant,
    sauf ceux qui sont divisibles par 3.
    Résultat attendu : [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20]
 */
function getNumbersAsc() {
    let array = []
    let nb = 0
    while (nb<=20){
        nb++
        if (nb % 3 !== 0){
            array.push(nb)
        }
    }
    return array
}
console.log(getNumbersAsc())

/*
    Calculer le salaire d'une personne sur base de son salaire brut en décomptant les frais suivants:
        - Impôts sur le revenu : 18%
        - Cotisations sociales si la personne a le statut CADRE : 7%
        - Cotisations sociales si la personne a le statut EMPLOYE : 10%

    Il est possible de recevoir des réductions sur les impôts sur le revenu sous certaines conditions :
        - Si le travailleur a plus de 2 personnes à charge, il reçoit 2% de réduction.

    Tests à réaliser ( le résultat du calcul sera rendu en entier ):
        Pour une personne non cadre avec 2 enfants à charge et gagnant 3000 euros -> Le salaire net dest de 2250 euros
        Pour une personne cadre avec 4 enfants à charge et gagnant 4000 euros -> Le salaire net dest de 2857 euros
 */
function calculSalaireNet(brut,isCadre,nbPersonnesACharge){
    let impots =0

    impots+=18*brut/100

    if (isCadre === false){
        impots+=7*brut/100
    }
    else if (isCadre === true){
        impots+=10*brut/100
    }
    if (nbPersonnesACharge<2){
        impots-=2*brut/100
    }
    let net = brut-impots
    return "Le salaire net est de "+net+" €"
}
console.log(calculSalaireNet(3000,false,2))
console.log(calculSalaireNet(4000,true,4))