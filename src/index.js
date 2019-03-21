module.exports = function getZerosCount(number, base) {
  // your implementation
  let arrayMultiple = [];
 let condition = true;
 let conditionWhile = true;
 let objCountPow ={};
 let lengthMultiple;;

 for (let divider = 2; base > 1; divider++) {
   do {
     condition = base % divider;
     if (base < divider) {
       arrayMultiple.push(base);
       base /= base;
     } if (condition ===0 && base > 1) {
       arrayMultiple.push(divider);
       base /= divider;
       if (base === divider * divider) {
         arrayMultiple.push(divider);
         arrayMultiple.push(divider);
         base /= base;
       }
     } else {conditionWhile = false;}
   } while(conditionWhile);
   }
   //loop for count POw of multiplies
   lengthMultiple = arrayMultiple.length;
   for(let i = 0; lengthMultiple > i; i++) {
     let count = 0;
     for (let j = 0; lengthMultiple > j; j++) {
       if (arrayMultiple[i] === arrayMultiple[j]) {
         count++;
       }
       let str = String(arrayMultiple[i]);
       objCountPow[str] = count;
     }
   }

   let array = [];
   let element;
   let primaryElement; //primary multiple
   let arrayResult =[];

//count the number of ending zeros
 for (let i = 0; lengthMultiple > i; i++) {
   primaryElement = arrayMultiple[i];
   if (primaryElement !== 1) {
  for (let k = 1; true; k++ ) {
    element = number / Math.pow(primaryElement, k);
    element = Math.floor(element);
      if (element !== 0) {
        array.push(element);
   } else {break;}
   }
   //sum elements and sort
   let sum = array.reduce(function(sum, current) { return sum + current}, 0);
   let str2 = String(primaryElement);
   sum = sum / objCountPow[str2];
   arrayResult.push(Math.floor(sum));
   array.splice(0,array.length); 
 } else {break;}
}
 arrayResult.sort(function(a, b) { 
   if (a > b) return 1;
   if (a < b) return -1;
 });
 return arrayResult[0];
}