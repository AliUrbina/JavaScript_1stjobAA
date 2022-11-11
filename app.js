function moverPosicionRandom (elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSI = document.getElementById("btn_si");
let btnno = document.getElementById("btn_no");
let divBomnito = document.getElementsByClassName("Bomnito")[0];

btnno.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSI.addEventListener('click', function(e) {
    alert('HAS ELEGIDO SABIAMENTE..TE QUIERO MUCHO PRECIOSILLO... CUANDO LA BODA?')
 
    divBomnito.style.display = 'block';
    const cancion = new Audio('img/MISHINO AUDIO.mp3');
    cancion.play(); 
});