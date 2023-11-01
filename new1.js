function maxColumn(matrix) {
   let result = []
    
   for (let i = 0; i < matrix.length; i++){
    let max = matrix[0][i]
    for (let j = 1; j < matrix[i].length; j++){
        
        if (matrix[j][i] > max){
            max = matrix[j][i]
            
        }
       
    }
    result.push(max)
   }
   return result
  }
  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(maxColumn(matrix)); // [12, 19, 21]