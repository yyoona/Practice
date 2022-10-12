let month = [];
let w = 0.01;

function drawBarGraph_Helsinki(){

  // let mappedValue = map(cirX,sliderX-sliderW/2,sliderX+sliderW/2,0,diagramX/2)
  let gap = (diagramY)/numRows_H - w;
  for(let i = 0; i<numRows_H; i++){
    let h =  map(daylength[i],0,86400,0,diagramX/2);
    let point1x = width/2;
    let point1y = (w+gap)*i + 20;
    let point2x = point1x - h; 
    let point2y = point1y;

    //draw the line
    if(i % 7 ===0){
      noStroke();
      month[i] = table_H.getNum(i,0);
      textSize(10)
      textAlign(CENTER)
      text(month[i],point1x,point1y+10)
      strokeWeight(1);
      stroke('white');
    }else{
      strokeWeight(w);
      stroke('white');
    }

    stroke('white');
    line(point1x, point1y, point2x, point2y)

  }

}

function drawBarGraph_Seoul(){
  // let mappedValue = map(cirX,sliderX-sliderW/2,sliderX+sliderW/2,0,diagramX/2)
  let gap = (height-diagramY/6-40)/numRows_S - w;
  for(let u = 0; u<numRows_S; u++){
    let j =  map(daylength[u],0,86400,0,diagramX/2);
    let point3x = diagramX - 20;
    let point3y = (w+gap)*u + 20;
    let point4x = point3x - j; 
    let point4y = point3y;

    //draw the line
    if(u % 7 ===0){
      noStroke();
      month[u] = table_S.getNum(u,0);
      textSize(10)
      textAlign(CENTER)
      text(month[u],point3x,point3y+10)
      strokeWeight(1);
      stroke('white');
    }else{
      strokeWeight(w);
      stroke('white');
    }

    stroke('white');
    line(point3x, point3y, point4x, point4y)

  }

}


