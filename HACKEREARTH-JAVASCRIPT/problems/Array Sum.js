// Problem

// You are given an array A consisting of N integers.

// Task

// Print the sum of the elements in the array.

// Note: Some of the integers may be quite large.

// Input Format

//     The first line contains a single integer N denoting the size of the array.
//     The next line contains space-separated integers denoting the elements of the array.

// Output format

// Print a single value representing the sum of the elements in the array.

// Constraints

// 1<=N<=10

//  0<=a[i]<=10^10


process.stdin.resume();
process.stdin.setEncoding('ascii');
 
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
 
process.stdin.on('data', function (data) {
    input_stdin += data;
});
 
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
 
function readLine() {
    return input_stdin_array[input_currentline++];
}
 
/////////////// ignore above this line ////////////////////
 
function main() {
    var n = parseInt(readLine());  //n = 4
    arr = readLine().split(' '); //"1 4 3 2" split into array elements [1, 4, 3, 2] (length: 4, index: 3)
    arr = arr.map(Number);
//I = arr.length-1 because length returns index + 1. IF we just set to arr.length then we would have I starting at 4, but no value in this array has index 4.
     
//MY CODE BEGINS HERE 

   sumOfNumbers(n,arr);
}


// Write your code here
function sumOfNumbers(n,numList) {
    var sumNum = 0;
    for (var i=0; i<n; i++){
        sumNum+=numList[i];
    }
    console.log(sumNum);
}
