var marvel=[];
function buco(){
    var hola=document.getElementById("nombre1").value;
    var holla=document.getElementById("nombre2").value;
    var holi=document.getElementById("nombre3").value;
    var hola1=document.getElementById("nombre4").value;
    marvel.push(hola);
    marvel.push(holla);
    marvel.push(holi);
    marvel.push(hola1);
    document.getElementById("lista").innerHTML=marvel;
    document.getElementById("hola").style.display= "none";
    document.getElementById("orden").style.display= "inline-block";
}
function go(){
    document.getElementById("lista").innerHTML=marvel.sort();
    document.getElementById("orden").style.display= "none";
    document.getElementById("hola").style.display= "inline-block";
}