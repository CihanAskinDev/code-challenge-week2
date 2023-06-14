function checkBiggestInt() {
for(let i=0; i<paramArray.length; i++) {

    let checkBiggestInt = 0;

    for(let i=0; i<paramArray.length; i++) {
        if (checkBiggestInt < paramArray[i]) {
            biggestInt = paramArray[i];
            statusCheck = "✅";
        } else {
            statusCheck = "❌";
        }
        console.log(`${statusCheck} biggestInt = ${biggestInt} currentInt = ${paramArray[i]});
        currentInt = ${paramArray[i]}`)
    }
}
}

const arrayInt = [4,5666,4335,665,23,244,];
checkBiggestInt(arrayInt);