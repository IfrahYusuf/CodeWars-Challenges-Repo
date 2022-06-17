function firstNonConsecutive (arr) {
    //First loop through all the elements in the array
      for(let i=0; i < arr.length - 1; ++i){
    // Is the element equal to the previous element + 1?
        if( arr[i + 1] - arr[i] !== 1) {
          return arr[i + 1];
        }    
      }
      return null;
    }