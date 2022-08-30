function hasTargetSum(array, target) {
  
// const rray=[3, 8, 12, 4, 11, 7]

  //  const  [a,b,c,d,e,f]=array

   for(let i=0;i<array.length;i++){

    const compliment=target - array[i]
     
    for(let j=i+1;j<array.length;j++){

      if(array[j]===compliment){
        return true
      }

    }
    return false
    
   }
     //  if(a+b===target)

// return a+f
// console.log(b)
// return (a+f)?true:false
  // return (target  && array)?true:false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
