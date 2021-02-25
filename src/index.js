// You should implement your task here.

module.exports = function towelSort (matrix) {
  let my = [];
 // let cntr = false, y = 0;
  if (Array.isArray(matrix) && matrix.length >= 0){  
    
    for(let x = 0; x < matrix.length; x++){
      if (matrix[x].length > 0){
        if(x % 2 == 0){
          for(let y = 0; y < matrix[x].length; y++)
            my.push(matrix[x][y]);
        }else{
          for(let i = matrix[x].length - 1; i >= 0; i--){
            my.push(matrix[x][i]);
          }

        }


      }else my.push(matrix[x]);
    }
    return my;
  } else return [];
}
