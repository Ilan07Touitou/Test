//function test(){document.getElementById("i1").src = "test.html";}
function fonction1(){
    let test = prompt("Bonjour; veuillez saisir une chaine de caractère : ");
    document.body.innerHTML=test; 
}


function fonction1Ilan(){
    let test = prompt("Merci d'inscrire une chaîne de caractères : ");
    document.body.innerHTML=test;
}

function fonction2(){
    let a = 42; 
    let b = 7569;
    let result = a+b;
    alert(result);
}

function fonction2Ilan(){
    let aStr = prompt("Veuillez saisir un premier nombre : ");
    let bStr = prompt("Veuillez saisir un deuxième nombre : ");
    let a = parseFloat(aStr);
    let b = parseFloat(bStr);
    alert("La somme des deux nombres est : "+ (a+b));
}


function fonction3(){
    let Note_de_Maths = 11;
    let Note_de_francais = 9;
    let Note_histoire_geo = 16;
    let moyenne = (Note_de_Maths+Note_de_francais+Note_histoire_geo);
    alert("Votre moyenne est de : "+moyenne);
}
function fonction3Ilan(){
    let nbNotesStr = prompt("Combien de notes souhaitez vous saisir afin d'en faire la moyenne ?");
    let nbNotes = parseInt(nbNotesStr); 
    let notes = [];

    for(let i=0; i<nbNotes; i++){
        let Note=prompt("Veuillez saisir une note : ");
        Note = parseFloat(Note);
        notes.push(Note);
    }

    let somme = 0;
    for(let i = 0; i < notes.length;i++){
        somme+=notes[i];
    }
    let moyenne = somme / notes.length;
    alert("La moyenne de toutes les notes est de :"+moyenne);
}


function fonction4(){
    let budget = 1553.89;
    let achat = 1554.76;
    if(budget>=achat){
        alert("Le budget ("+budget+" €) est suffisant pour réaliser tout vos achats ("+achat+" €)");
    }
    else{
        alert("Le budget ("+budget+" €) n'est pas suffisant pour réaliser tout vos achats ("+achat+" €)");
    }
}
function fonction4Ilan(){
    let Budget = prompt("Veuillez saisir le budget dont vous disposez : ");
    Budget = parseInt(Budget);   

    let Achats = prompt("Veuillez saisir le montant total de vos achats : ");
    Achats = parseInt(Achats);

    if(Achats<= Budget){
        alert("Vous avez le budget nécessaire pour tout acheter, il vous restera : "+(Budget-Achats)+"€");
    }
    else{
        alert("Vous n'avez pas le budget nécessaire. Il vous manque : "+(Achats-Budget)+"€"); 
    }
}

function fonction5(){
    
    let HT=prompt("Quel est le prix de votre article Hors Taxes ?");
    let TTC=HT*1.2; 
    document.body.innerText=TTC; 
}
function fonction5Ilan(){
    let prixHT = prompt("Veuillez saisir le prix de votre article Hors Taxe : ");
    document.body.innerText = ("Le prix de votre article TTC est de : "+prixHT*1.2+"€"); //pourquoi la j'ai pu faire le calcul avec un prompt sans parse alors que dans les exos précédents (la moyenne)
}


function fonction6(){
    let HT = prompt("Quel est le prix de votre article Hors Taxes ?");
    let Taux_Tva = prompt("Quel est le Taux de la TVA ? ");
    Taux_Tva = (Taux_Tva/100)+1; 
    let TTC=HT*Taux_Tva; 
    document.body.innerHTML=TTC; 
}
function fonction6Ilan(){
    let prixHT = prompt("Veuillez saisir le prix de votre article Hors Taxe :  ");
    let TVA = prompt("Veuillez saisir le Taux de TVA : ");
    TVA = (TVA/100)+1; 
    document.body.innerText = ("Le prix de votre article TTC est de : "+(prixHT*TVA)+"€"); 
}

function fonction7(){
    let HT = prompt("Quel est le prix de votre article Hors Taxes ?");
    let Taux_Tva = prompt("Quel est le Taux de la TVA ? ");
    Taux_Tva = (Taux_Tva/100)+1; 
    let TTC=HT*Taux_Tva; 
    if(TTC>100){
        document.body.innerHTML = ('<h1 style="background-color:red; color:pink;">'+"Le prix de votre article TTC est de : "+prixTTC+"€"+'</h1>');
    }
    else{
        document.body.innerHTML = ('<h1 style="background-color:green; color:lightgreen;">'+"Le prix de votre article TTC est de : "+prixTTC+"€"+'</h1>');
    }
}
function fonction7Ilan(){
    let prixHT = prompt("Veuillez saisir le prix de votre article Hors Taxe :  ");
    let TVA = prompt("Veuillez saisir le Taux de TVA : ");
    TVA = (TVA/100)+1; 
    let prixTTC = prixHT*TVA;
    if(prixTTC > 100){
        document.body.innerHTML = ('<h1 style="background-color:red; color:pink;">'+"Le prix de votre article TTC est de : "+prixTTC+"€"+'</h1>');

    }
    else{
            document.body.innerHTML = ('<h1 style="background-color:green; color:lightgreen;">'+"Le prix de votre article TTC est de : "+prixTTC+"€"+'</h1>');
    }
}

function fonction8(){ //Ne fonctionne pas
    alert("cette fonction ne marche pas");
}
function fonction8Ilan(){ //Ne fonctionne pas
    alert("Cette fonction ne fonctionne pas :/");
    document.getElementById("i2").src = "fonction8.html";
    document.getElementById('cocktail').innerText = 'Long Island Iced Tea';
    document.getElementById("i2").src = "fonction8.html";
}

function fonction9(){
    for(let i=10; i<=1000; i+=10){
        console.log(i);
    }
}
function fonction9Ilan(){
    let x =1;
    for(let i = 10; i<=1000;i+=10){
        console.log(i);
        //alert("Le "+x+" élément est : "+i);
        //document.body.innerHTML = ("Le "+x+" élément est : "+i+"<br>");
        x++; 
    }
} 

function fonction10(){
    let age = prompt("Quel âge avez-vous ?");
    if (age >= 18){
        alert("Vous êtes majeur ! ");
    }
    else{
        alert("Vous êtes mineur !");
    }
}
function fonction10Ilan(){
    let age = prompt("Veuillez saisir votre âge : ");
    if (age>=18 && age<125){
        alert("Vous êtes majeur.");
    }
    else if (age<18 && age>0){
        alert("Vous êtes mineur.");
    }
    else {
        alert("Veuillez rentrer un âge valide."); 
    }
}

function fonction11(){
    let CodePostal = 77000;
    while(CodePostal<=77999){
        console.log(CodePostal);
        CodePostal++; 
    }
}
function fonction11Ilan(){
    let CP = prompt("De quel département voulez vous avoir tous les Codes Postaux possibles ? (ex: 77)"); 
    CP = CP*1000; 
    if(CP>0){
       for(let i=0;i<1000;i++){
            console.log(CP);
            CP++; 
        } 
    }
    else{
        alert("Veuillez rentrer le numéro d'un département valide.");
    }  
}

function fonction12Ilan(){
    for(let i=5; i<=50; i+=5){
        alert(i);
    }
}

function fonction13Ilan(){
    let Ecriture = "Boom";
    var NbEtage = prompt("Combien d'étages voulez-vous pour la pyramide ?");
    NbEtage =  parseInt(NbEtage)
    for(let i = 1; i=NbEtage; i++){
        for(let k=1; k<=i;k++){
            Ecriture = Ecriture+i;
        }
    Ecriture = Ecriture + "<br />";    
    }   
document.body.innerHTML=Ecriture;
}
