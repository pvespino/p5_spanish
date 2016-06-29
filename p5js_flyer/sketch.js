var title = "introducción a la programación creativa"
var p5Text = "p5.js";

var contents = "variables, web, javascript, html, iteración, interactividad"

var cost = "costo gratuito"

var about = "programador, artista sonoro";
var contact = "aamontoya @ gmail.com"

var sponsor = "The Processing Foundation";

var audience1 = "artistas, músicos, educadores, programadores, diseñadores";
var audience2 = "escritores, pintores, escultores, fotógrafos"

var verticalStep = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CORNER);
  smooth();
  noStroke();
  frameRate(1);
}

function draw() {

  var randomColor1 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor2 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor3 = color(int(random(255)), int(random(255)), int(random(255)));
  var randomColor4 = color(int(random(255)), int(random(255)), int(random(255)));
  var p5Color = color('#ED225D');
  var blueColor = color('#2D7BB6');

  textSize(40);
  textAlign(LEFT);

  fill(randomColor1);
  text(title, 0, verticalStep);

  fill(p5Color);
  text("con el lenguaje " + p5Text, 0, verticalStep * 2);

  textSize(30);
  textAlign(CENTER)

  fill(randomColor2);
  text("diseñado para: ", width / 2, verticalStep * 4);
  fill(blueColor);
  text(audience1, width / 2, verticalStep * 5);
  text(audience2, width / 2, verticalStep * 6);

  fill(randomColor3);
  text("contenidos: ", width / 2, verticalStep * 8);
  fill(blueColor);
  text(contents, width / 2, verticalStep * 9);

  fill(randomColor4);
  text("dictado por aarón montoya-moraga: ", width / 2, verticalStep * 11);
  fill(blueColor);
  text(about, width / 2, verticalStep * 12);
  
  



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}