let dataMin, dataMax=0;

function minMax(){

  for(let i=0;i<numRows;i++){
    if(table_H.getNum(i,1)>dataMax){
      dataMax = table_H.getNum(i,1);
    }
  }
  dataMin = dataMax;
  for(let i=0;i<numRows;i++){
    if(table_H.getNum(i,1)<dataMin){
      dataMin = table_H.getNum(i,1);
    }
  }
}

// function minMax_2(){

//  for(let i2=0;i_2<numRows_2;i2++){
//   if(table_S.getNum(i2,1)>dataMax_2){
//     dataMax_2 = table_S.getNum(i2,1);
//   }
// }
// dataMin_2 = dataMax_2;
// for(let i2=0;i2<numRows_2;i2++){
//   if(table_H.getNum(i2,1)<dataMin_2){
//     dataMin_2 = table_H.getNum(i2,1);
//   }
// }
// }
