let table_H;
let table_S;
let numRows_H, numCols_H;
let numRows_S, numCols_S;

let day = [], daylength = [];
let diagramX, diagramY;
let size = [];
//let c;
let showGraph_H=true;
let showGraph_S=true;

function preload(){
  table_H = loadTable('./data/Daylength_Helsinki.csv', 'csv', 'header');
  table_S = loadTable('./data/Daylength_Seoul.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  //get the basic info of the Helsinki data
  numRows_H = table_H.getRowCount();
  numCols_H = table_H.getColumnCount();
//  print("rows:" + numRows_1 + ", cols:" + numCols_1);
  
  //load Helsinki data
  for(let r = 0; r<table_H.getRowCount(); r++){
    day[r] = table_H.getString(r,0);
    daylength[r] = table_H.getNum(r,1);
    //print(day[r1] + " " + daylength[r1])
  }

  //get the basic info of the Seoul data
  numRows_S = table_S.getRowCount();
  numCols_S = table_S.getColumnCount();
//  print("rows:" + numRows_1 + ", cols:" + numCols_1);
  
  //load Helsinki data
  for(let t = 0; t<table_S.getRowCount(); t++){
    day[t] = table_S.getString(t,0);
    daylength[t] = table_S.getNum(t,1);
    //print(day[r1] + " " + daylength[r1])
  }

  minMax_H();
  minMax_S();
  
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
  if(showGraph_H){
    drawBarGraph_Helsinki();

  }
  if(showGraph_S){

    drawBarGraph_Seoul();
  }
}

