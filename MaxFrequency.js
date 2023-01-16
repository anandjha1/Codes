
let str = "this is a javascript program by anand. aa aaa mmmmmmmm mmmm mmmmmmmm mmmmmm";
console.log(getMaxFrequency(str.split("")));

const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];
console.log(getMaxFrequency(numbers))

function getMaxFrequency(arr){
  let obj = {};
  max = arr[0];
//   assigning frequency to all obj
  arr.forEach(c=>{
      obj[c] = obj[c]?obj[c]+1 : 1;
  })
// checking for the max frquency
  for(let k of Object.keys(obj)){
      max = obj[k]>=obj[max]? k : max;
  }
  
  return max;
}
