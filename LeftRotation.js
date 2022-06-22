'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function reverse(arr){
    let count = 0;
    while(count != Math.floor(arr.length / 2)){
        let temp = arr[count];
        let endIndex = arr.length - 1 - count;
        arr[count] = arr[endIndex];
        arr[endIndex] = temp;
        count++;
    }
    return arr;
}

function rotateLeft(d, arr) {
    // Write your code here
    
    // 1st attempt
    let count = 0;
    while( count != d){
        let elementToRotate = arr[0];
        for(let i = 0 ; i< arr.length - 1; i++){
            arr[i] = arr[ i + 1];
        }
        arr[arr.length - 1] = elementToRotate;
        count++;
    }
    
    // reversal algorithm - 2nd attempt
    return [...reverse([...reverse(arr.slice(0,d)),...reverse(arr.slice(d,arr.length))])];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
