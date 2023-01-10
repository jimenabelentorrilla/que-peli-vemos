let movie = document.getElementById("movie");
let btn = document.getElementById("btn");



var listado = [
    "The Lost Boys", "Muriel’s Wedding", "Tomboy", "Brawl In Cell Block 99", "VFW", "Dressed To Kill", "True Romance", "Los Paranoicos", "Like Father Like Son", "Under The Silver Lake", "Targets", "Picnic At Hanging Rock", "Do The Right Thing", "Heat"
];


function seleccionarPeliAlAzar(peli) {
    return peli[Math.floor(Math.random() * listado.length)]
}


window.addEventListener("load", clicked);
btn.addEventListener("click", clicked);


function clicked() {
    movie.innerText = seleccionarPeliAlAzar(listado);
}