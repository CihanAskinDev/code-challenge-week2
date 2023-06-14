

function findEvenNumber(paramArray) {

let statusCheck = null;

for (let i=0; i<paramArray.length; i++){
if (paramArray[i] % 2 !==1) {
    statusCheck = "✅";
} else {
    statusCheck = "❌";
} 
console.log(`${statusCheck} ${paramArray[i]}`);
}
}

const thisArray = [2,4,16,5,1,4,65,8,3,8,3,8,2,5,2];
const result = findEvenNumber(thisArray);