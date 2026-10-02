const btnLieux=document.getElementById("btnLieux");
const listeLieux=document.querySelector(".listeLieux");

const btngouter=document.getElementById("btngouter");
const listeagouters=document.querySelector(".listeagouters");

const btnobjet=document.getElementById("btnobjet");
const listeobjets=document.querySelector(".listeobjets");

const modal = document.getElementById("modal");
const btnFermer = document.getElementById("btnFermer");
const designation = document.getElementById("designation");
const btnAjouter = document.getElementById("btnAjouter");

const couleurs = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "gold",
    "pink",
    "brown",
    "teal",
    "cyan",
    "lime",
    "coral"
];

const couleurs2 = [
    "navy",
    "tomato",
    "violet",
    "salmon",
    "olive",
    "skyblue",
    "maroon",
    "khaki",
    "turquoise",
    "plum"
];

const couleurs3 = [
    "firebrick",
    "steelblue",
    "seagreen",
    "darkorange",
    "orchid",
    "slateblue",
    "sienna",
    "hotpink",
    "darkcyan",
    "mediumseagreen"
];

let indexLieu = 0;
let indexGouter = 0;
let indexObjet = 0;


let categorieChoisie="";

btnLieux.addEventListener("click", function(){
    
    categorieChoisie="lieu";
    modal.style.display="flex";


});


btngouter.addEventListener("click", function(){

     categorieChoisie = "gouter";
      modal.style.display="flex";


});

btnobjet.addEventListener("click",function(){

 categorieChoisie = "objet";
 modal.style.display="flex";

});


btnFermer.addEventListener("click",function(){
    modal.style.display="none";
});



btnAjouter.addEventListener("click",function(){
   const texte= designation.value;
    couleurs.push(texte)
   if(categorieChoisie==="lieu"){
        const element1=document.createElement("p");
        element1.textContent=texte;
        listeLieux.appendChild(element1);
        element1.style.color=couleurs[indexLieu];
        
        indexLieu++;
   }else if(categorieChoisie==="gouter"){

        const element2=document.createElement("p");
        element2.textContent=texte;
        listeagouters.appendChild(element2);
        element2.style.color=couleurs2[indexGouter];

        indexGouter++;

    }else{
        
        const element3=document.createElement("p");
        element3.textContent=texte;
        listeobjets.appendChild(element3);
        element3.style.color=couleurs3[indexObjet];

        indexObjet++
    }
    
    designation.value="";
});





