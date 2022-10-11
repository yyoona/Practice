function drawBarGraph_Helsinki(){
  let month = [];
  let w = 0.2;
  // let mappedValue = map(cirX,sliderX-sliderW/2,sliderX+sliderW/2,0,diagramX/2)
  let gap = (height-diagramY/2-40)/numRows - w;
  for(let i = 0; i<numRows; i++){
    let h =  map(daylength[i],0,86400,0,diagramX/2);
    let point1x = 20;
    let point1y = (w+gap)*i + 20;
    let point2x = point1x + h; 
    let point2y = point1y;

    //draw the line
    if(i % 7 ===0){
      noStroke();
      month[i] = table_H.getNum(i,0);
      textSize(10)
      textAlign(CENTER)
      text(month[i],point1x,point1y+10)
      strokeWeight(1);
      stroke('#78B6FF');
    }else{
      strokeWeight(w);
      stroke('#78B6FF');
    }

    line(point1x, point1y, point2x, point2y)
    stroke('black')
    line(point2x, point2y, diagramX/2, point2y)
  }

}

// function drawBarGraph_Seoul(){
//   let month = [];
//   let w = 0.2;
//   // let mappedValue = map(cirX,sliderX-sliderW/2,sliderX+sliderW/2,0,diagramX/2)
//   let gap = (height-diagramY/2-40)/numRows_2 - w;
//   for(let i = 0; i<numRows_2; i++){
//     let h =  map(daylength[i],0,86400,0,diagramX/2);
//     let point3x = diagramX - 20;
//     let point3y = (w+gap)*i + 20;
//     let point4x = point3x - h; 
//     let point4y = point3y;

//     //draw the line
//     if(i % 7 ===0){
//       noStroke();
//       month[i] = table_S.getNum(i,0);
//       textSize(10)
//       textAlign(CENTER)
//       text(month[i],point3x,point3y+10)
//       strokeWeight(1);
//       stroke('#78B6FF');
//     }else{
//       strokeWeight(w);
//       stroke('#78B6FF');
//     }

//     line(point3x, point3y, point4x, point4y)
//     stroke('black')
//     line(point3x, point3y, diagramX/2, point4y)
//   }

// }


