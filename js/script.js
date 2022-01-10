const btnRaffle = document.getElementById("raffle");
const showMugiwara = document.getElementById("mugiwara-result");

document.getElementById("img-op").style.display="none";

btnRaffle.setAttribute("onclick", "raffle()");

let mugiwaras = ["Monkey D. Luffy", "Roronoa Zoro", "Vinsmoke Sanji", "Nami", "Nico Robin", "Tony Tony Chopper", "God Usopp", "Franky", "Brook", "Jinbe"];

function raffle(){

    document.getElementById("img-op").style.display="";
    document.getElementById("raffle").style.margin=0;
    document.getElementById("name").style.padding=0;
    


    let tripulation = mugiwaras.length;

    let result = Math.floor(Math.random() * tripulation);

   showMugiwara.innerHTML = mugiwaras[result];

    if(mugiwaras[result] == "Monkey D. Luffy"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/luffy.png" width=300px>' 
    }
    if(mugiwaras[result] == "Roronoa Zoro"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/zoro.png" width=350px>' 
    }
    if(mugiwaras[result] == "Vinsmoke Sanji"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/sanji.png" width=350px>' 
    }
    if(mugiwaras[result] == "Nami"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/nami.png" width=300px>' 
    }
    if(mugiwaras[result] == "Nico Robin"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/robin.png" width=250px>' 
    }
    if(mugiwaras[result] == "Tony Tony Chopper"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/chopper.png" width=250px>' 
    }
    if(mugiwaras[result] == "God Usopp"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/usopp.png" width=200px>' 
    }
    if(mugiwaras[result] == "Franky"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/franky.png" width=220px>' 
    }
    if(mugiwaras[result] == "Brook"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/brook.png" width=400px>' 
    }
    if(mugiwaras[result] == "Jinbe"){
        document.getElementById("img-op").innerHTML = '<img src="/assets/jinbe.png" width=270px>' 
    }

}
