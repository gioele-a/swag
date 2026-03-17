let img;

function preload() {
  img = loadImage("foto.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // disegna l'immagine adattata alla canvas
  image(img, 0, 0, width, height);
}

// aggiorna la canvas quando cambia la dimensione della finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}