function drawBarGraph(){
  let month = [];
  let w = 0.2;
  let mappedValue = map(cirX,sliderX-sliderW/2,sliderX+sliderW/2,0,400)
  let gap = (width-diagramX/2-40)/numRows - w;
  
  for(let i = 0; i<numRows; i++){
    let h =  map(daylength[i],0,86400,0,mappedValue);
    let point1x = (w+gap)*i + width/3;
    let point1y = height - diagramY/2;
    let point2y = point1y -h;
    let point2x = point1x;
    
    //draw the line
    if(i % 7 ===0){
      noStroke();
      month[i] = table.getNum(i,0);
      textSize(10)
      textAlign(CENTER)
      text(month[i],point1x,point1y+10)
      strokeWeight(1);
      stroke('blue');
    }else{
      strokeWeight(w);
      stroke('black');
    }

    line(point1x, point1y, point2x, point2y)
    
    //connection - line
    let p1x = point2x;
    let p1y = point2y;
    if(i < numRows-1){
      let p2x = (w+gap)*(i+1) + width/3;
      let p2y = point1y - map(daylength[i+1],0,86400,0,mappedValue);
      strokeWeight(.8);
      stroke('blue');
      line(p1x,p1y,p2x,p2y);
    }
    
      //hover -
  //draw the data points
  let datasize;
  let dis = dist(mouseX,mouseY, point2x, point2y);
  if(dis<5){
    fill('red')
    datasize = 10;
    noStroke();
    circle(point2x, point2y, datasize);
    //draw information
    textAlign(CENTER);
    textSize(12);
    fill('black')
    text(day[i],diagramX,90);
    textSize(18);
    fill('blue')
    rectMode(CENTER);
    rect(diagramX, 120,20,1);
    text(daylength[i],diagramX,150);
  }else{
    fill('blue');
    datasize = 3;
    noStroke();
    circle(point2x, point2y, datasize);
    }
  }

}