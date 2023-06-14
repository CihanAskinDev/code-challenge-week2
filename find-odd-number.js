/*
----1. SETUP
// 1) declare a function and invoke the function by passing an argument to its parameter.
2) Check the function by console logging the parameter.
-----------

---2, LOOP THE PARAMETER
1) Create a for loop that through the parameter.
2) Console log the each the index of the forloop.
3) Console log the each value or the array.


---3. CONDITIONAL STATEMENT
1) Check if each value of the array is odd.
*/


function findOddNumber(paramArray) {

    let statusCheck = null;

    for (let i=0; i<paramArray.length; i++)
    if (paramArray[i] % 2 !== 0) {
        statusCheck = "✅";
    } else {
        statusCheck = "❌";
    }

    console.log(`${statusCheck} ${paramArray}`);
}

const thisArray = [2,4,16,5,1,4,65,8,3,8,3,8,2,5,2];
const result = findOddNumber(thisArray);
