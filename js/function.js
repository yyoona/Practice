let dataMin_H, dataMax_H=0;
let dataMin_S, dataMax_S=0;

function minMax_H(){

  for(let i=0;i<numRows_H;i++){
    if(table_H.getNum(i,1)>dataMax_H){
      dataMax_H = table_H.getNum(i,1);
    }
  }
  dataMin_H = dataMax_H;
  for(let i=0;i<numRows_H;i++){
    if(table_H.getNum(i,1)<dataMin_H){
      dataMin_H = table_H.getNum(i,1);
    }
  }
}

function minMax_S(){

  for(let i=0;i<numRows_S;i++){
    if(table_S.getNum(i,1)>dataMax_S){
      dataMax_S = table_S.getNum(i,1);
    }
  }
  dataMin_S = dataMax_S;
  for(let i=0;i<numRows_S;i++){
    if(table_S.getNum(i,1)<dataMin_S){
      dataMin_S = table_S.getNum(i,1);
    }
  }
}

