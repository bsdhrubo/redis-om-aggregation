export const fromArrayOfStringToJson=(data)=>{
  for(let d=1; d<data.length; d++){
    const arr = data[d]
    const result = {}
    for(let i=0; i<arr.length-1; i++){
      if(i%2 === 0){
        if(arr[i+1].includes("|")){
          arr[i+1] = arr[i+1].split('|')
        } 
        result[arr[i]] = arr[i+1] 
      }
    }
    data[d] = result
  }
  return data
} 