let table_H;
let numRows, numCols;

let day = [], daylength = [];
let diagramX, diagramY;
let size = [];
//let c;
let showGraph=true;

function preload(){
  table_H = loadTable('./data/Daylength_Helsinki.csv', 'csv', 'header');
 // table_S = loadTable('./data/Daylength_Seoul.csv', 'csv', 'header');
}

function setup() {
  createCanvas(displayWidth, displayHeight, SVG);
  rectMode(CENTER);
  
  //get the basic info of the Helsinki data
  numRows = table_H.getRowCount();
  numCols = table_H.getColumnCount();
//  print("rows:" + numRows_1 + ", cols:" + numCols_1);
  
  //load Helsinki data
  for(let r = 0; r<table_H.getRowCount(); r++){
    day[r] = table_H.getString(r,0);
    daylength[r] = table_H.getNum(r,1);
    //print(day[r1] + " " + daylength[r1])
  }
  minMax_1();
  
  //variable - value
  diagramX = width;
  diagramY = height;
  // buttonX = diagramX;
  // buttonY = height -50;
  // buttonW = 100;
  // buttonH = 30;
  //c = color ('black')
  // sliderX = buttonX;
  // sliderY = buttonY - 50;
  // sliderW = 400;
  // sliderH = 0.5;
  // cirX = sliderX;
  // cirY = sliderY;
 }



function draw() {
  if(showGraph){
    drawBarGraph_Helsinki();
    // drawBarGraph_Seoul();
  }
  // if(showGraph2){
  //   drawBarGraph_Seoul();
  // }

  // newButton(buttonX,buttonY,buttonW,buttonH,"SWITCH GRAPH",10);
  // newSlider(sliderX,sliderY,sliderW,sliderH,cirX,cirY)
  // if(dist(mouseX,mouseY,cirX,cirY)<30 && mouseIsPressed){
  //   cirX = mouseX;
  //   cirY = sliderY;
  //   c = color('red')
  // }else{
  //   c = color('black')
  // }
}

// function mousePressed(){
//   if(dist(mouseX,mouseY,buttonX,buttonY)<15){
//      showGraph1 =! showGraph1;
//      }
// }