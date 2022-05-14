


 
var myValue = Math.max(1,2,3,4,5,6,7,8); 
function sum(...args)

{ 
    let numSum = 0;
    for(const arg of args)
    {
         numSum+=arg;
    } 

    return numSum; 
} 

 var myArray =[4,5,1,2]; 
 console.log(sum(...myArray));



 
  var myValue = Math.max(1,2,3,4,5,6,7,8);
   
    function sum(...args)
    {
         for(const arg of args)
         {
              numSum+=arg;
         } return numSum;

    } var  myArray =[4,5,1,2];

          console.log(sum(...myArray))


    

