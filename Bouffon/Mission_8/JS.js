//function test(){document.getElementById("i1").src = "test.html";}

function fonction1(){
    let test = prompt("Merci d'inscrire une chaîne de caractères : ");
    document.body.innerHTML=test;
}

function fonction2(){
    let aStr = prompt("Veuillez saisir un premier nombre : ");
    let bStr = prompt("Veuillez saisir un deuxième nombre : ");
    let a = parseFloat(aStr);
    let b = parseFloat(bStr);
    alert("La somme des deux nombres est : "+ (a+b));
}

function fonction3(){
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
    let prixHT = prompt("Veuillez saisir le prix de votre article Hors Taxe : ");
    document.body.innerText = ("Le prix de votre article TTC est de : "+prixHT*1.2+"€"); //pourquoi la j'ai pu faire le calcul avec un prompt sans parse alors que dans les exos précédents (la moyenne)
}

function fonction6(){
    let prixHT = prompt("Veuillez saisir le prix de votre article Hors Taxe :  ");
    let TVA = prompt("Veuillez saisir le Taux de TVA : ");
    TVA = (TVA/100)+1; 
    document.body.innerText = ("Le prix de votre article TTC est de : "+(prixHT*TVA)+"€"); 
}

function fonction7(){
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

function fonction8(){ //Ne fonctionne pas. :'(   (/code de ChatGPT/)
    document.getElementById("i1").src = "fonction8.html";
    var cock = document.getElementById("cocktail");
    cock.textContent = "Long Island Iced Tea";
    document.getElementById("i2").src = "fonction8.html";
}

function fonction9(){
    let x =1;
    for(let i = 10; i<=1000;i+=10){
        alert("Le "+x+" élément est : "+i);
        //document.body.innerHTML = ("Le "+x+" élément est : "+i+"<br>");
        x++; 
    }
} 

function fonction10(){
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
    let CP = prompt("De quel département voulez vous avoir tous les Codes Postaux possibles ? (ex: 77)"); 
    CP = CP*1000; 
    if(CP>0){
       for(let i=0;i<1000;i++){
            alert(CP);
            CP++; 
        } 
    }
    else{
        alert("Veuillez rentrer le numéro d'un département valide.");
    }  
}

function fonction12(){
    for(let i=5; i<=50; i+=5){
        alert(i);
    }
}

function fonction13(){
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