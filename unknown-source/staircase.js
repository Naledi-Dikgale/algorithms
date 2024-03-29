// Its base and height are both equal to . It is drawn using # symbols and spaces. 
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .
// Function Description
// Complete the staircase function in the editor below.
// staircase has the following parameter(s):
// int n: an integer
// Print
// Print a staircase as described above.
// Input Format
// A single integer, , denoting the size of the staircase.

'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here

    for (let i = 1; i <= n; i++) {
        // Print spaces
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(' ');
        }
        // Print '#' symbols
        for (let k = 1; k <= i; k++) {
            process.stdout.write('#');
        }
        // Move to the next line
        process.stdout.write('\n');
    }
}
    
    function main() {
        const n = readLine().trim() - 0; // Using type coercion to convert string to number
        staircase(n);
    }
    
    main();

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}