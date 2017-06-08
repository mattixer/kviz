function leek() {
    document.getElementById("jedan").style.display = "none";
    document.getElementById("dva").style.display = "none";
    document.getElementById("tri").style.display = "none";
    document.getElementById("cetiri").style.display = "none";
    document.getElementById("pet").style.display = "none";
    document.getElementById("rezultati").style.display = "none";
}

function prvi() {
    skrr = setTimeout(drugi,15000);
    document.getElementById("pocetak").style.display = "none";
    document.getElementById("jedan").style.display = "block";
}

function drugi() {
    clearTimeout(skrr);
    skrr = setTimeout(treci,15000);
    document.getElementById("jedan").style.display = "none";
    document.getElementById("dva").style.display = "block";
}

function treci() {
    clearTimeout(skrr);
    skrr = setTimeout(cetvrti,15000);
    document.getElementById("dva").style.display = "none";
    document.getElementById("tri").style.display = "block";
}

function cetvrti() {
    clearTimeout(skrr);
    skrr = setTimeout(peti,15000);
    document.getElementById("tri").style.display = "none";
    document.getElementById("cetiri").style.display = "block";
}

function peti() {
    clearTimeout(skrr);
    setTimeout(rezultati,15000);
    document.getElementById("cetiri").style.display = "none";
    document.getElementById("pet").style.display = "block";
}

function rezultati(){
    document.getElementById("pet").style.display = "none";
    document.getElementById("rezultati").style.display = "block";
    var einz = document.getElementById("vise").checked;
    var zwei = document.getElementById("crv").checked;
    var drei = document.getElementById("krv").checked;
    var vier = document.getElementById("ska").checked;
    var funf = document.getElementById("doodle").checked;
    var zechs = document.getElementById("towel").checked;
    var acht = document.getElementById("krim").checked;
    var neun = document.getElementById("tim").checked;
    var uspijeh = 0;
    if(einz){uspijeh+=1;}
    if(zwei){uspijeh+=1;}
    if(drei){uspijeh+=1;}
    if(vier && funf && !acht && !neun){uspijeh+=1;}
    if(zechs){uspijeh+=1;}
    document.getElementById("mrvica").innerHTML = "Postotak tocnog: "+20*uspijeh+"%";
}