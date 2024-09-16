const getIntersectionOfSortedArrays = (arr1, arr2) => {
    let result = [];
  
    let a = 0;
    let b = 0;
    
    
    while (a < arr1.length && b < arr2.length) {  
      if (arr1[a] === arr2[b]) {
        result.push(arr1[a])
        a++
        b++
      }
      if (arr1[a] < arr2[b]) {
        a++
      } else { 
        b++
      }  
    }
    console.log(result)
    return result;
    
  }
  getIntersectionOfSortedArrays()
  export default getIntersectionOfSortedArrays;
  