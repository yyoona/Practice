let table_1;
let table_2;
let numRows, numCols;
let day = [], daylength = [];
let diagramX, diagramY;
let size = [];
let buttonX,buttonY,buttonW,buttonH;
let c;
let showGraph1=true;

function preload(){
  table_1 = loadTable('./data/Daylength_Helsinki.csv','csv', 'header');
  //table_2 = loadTable('./data/Daylength_Seoul.csv','csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  //get the basic info of the data
  numRows = table_1.getRowCount();
  numCols = table_1.getColumnCount();
  //print("rows:" + numRows + ", cols:" + numCols);
  
  //load data
  for(let r = 0; r<table_1.getRowCount(); r++){
    day[r] = table_1.getString(r,0);
    daylength[r] = table_1.getNum(r,1);
   // print(day[r] + " " + daylength[r])
  }
  
  minMax();
  
  //variable - value
  diagramX = (width/4)*3-90;
  diagramY = height/2;
  buttonX = diagramX;
  buttonY = height -50;
  buttonW = 100;
  buttonH = 30;
  c = color ('black')
  sliderX = buttonX;
  sliderY = buttonY - 50;
  sliderW = 400;
  sliderH = 0.5;
  cirX = sliderX;
  cirY = sliderY;
 }



function draw() {

  drawBarGraph();

  //newButton(buttonX,buttonY,buttonW,buttonH,"SWITCH GRAPH",10);
  //newSlider(sliderX,sliderY,sliderW,sliderH,cirX,cirY)

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