'use strict';
var counter=0;
var array=[1,2,3,4,5];
var num = 3;

function greaterThan(array,num){
    for (var i=0 ; i<array.length;i++){
        if (array[i] > num){
            counter++;
        }
    }    
}

greaterThan(array,num);
console.log(counter);





