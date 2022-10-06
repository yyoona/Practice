let data;

function preload(){
  data = loadTable('InformationDesign Dataset_week1.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
  noLoop();
    
   }
   
function draw() {
  if(data){
    
    let numRows = data.getRowCount();
    
    let sunrise_mins = data.getColumn('Sunrise_Mins')
    print(sunrise_mins);
    
    for (let i = 0; i <numRows; i++){
      
      let x = 10;
      let y = 10 + (i*100);
      let w = 50;
      let h = sunrise_mins[i]*0.1;
      
      rect(x,y,w,h);
      
    }
    
  }

}