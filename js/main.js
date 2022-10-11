let table_1;
let table_2;
let numRows_1, numCols_1;
let numRows_2, numCols_2;
let day = [], daylength = [];
let diagramX, diagramY;
let size = [];
let buttonX,buttonY,buttonW,buttonH;
let c;
let showGraph1=true;

function preload(){
  table_1 = loadTable('./data/Daylength_Helsinki.csv', 'csv', 'header');
  table_2 = loadTable('./data/Daylength_Seoul.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  //get the basic info of the Helsinki data
  numRows_1 = table_1.getRowCount();
  numCols_1 = table_1.getColumnCount();
  print("rows:" + numRows_1 + ", cols:" + numCols_1);
  
  //load Helsinki data
  for(let r_1 = 0; r<table_1.getRowCount(); r_1++){
    day[r_1] = table_1.getString(r_1,0);
    daylength[r_1] = table_1.getNum(r_1,1);
    //print(day[r] + " " + daylength[r])
  }

  //get the basic info of the Seoul data
  numRows_2 = table_2.getRowCount();
  numCols_2 = table_2.getColumnCount();
  print("rows:" + numRows_1 + ", cols:" + numCols_1);
  
  //load Seoul data
  for(let r_2 = 0; r<table_2.getRowCount(); r_2++){
    day[r_2] = table_2.getString(r_2,0);
    daylength[r_2] = table_2.getNum(r_2,1);
    //print(day[r] + " " + daylength[r])
  }



  minMax();
  
  //variable - value
  diagramX = width/2;
  diagramY = height/2;
  // buttonX = diagramX;
  // buttonY = height -50;
  // buttonW = 100;
  // buttonH = 30;
  c = color ('black')
  // sliderX = buttonX;
  // sliderY = buttonY - 50;
  // sliderW = 400;
  // sliderH = 0.5;
  // cirX = sliderX;
  // cirY = sliderY;
 }



function draw() {
  if(showGraph1){
    drawBarGraph_Helsinki();
    drawBarGraph_Seoul();
  }

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