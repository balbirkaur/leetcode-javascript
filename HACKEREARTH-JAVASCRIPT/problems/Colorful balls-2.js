// Problem

// Today Oz is playing with colorful balls. He has A red balls, B blue balls, C green balls and D yellow balls. Using the balls, he wants to make a colorful straight line such that no two balls of same type are adjacent to each other. He also knows that their are many ways to make colorful straight line keeping the condition so first he wants to know how many ways are their to make colorful straight line. Help Oz with the answer.

// Note:
// Each ball of a given type is identical to others of the same type, thus swapping the positions of two of the same type of balls does not make a new arrangement.

// Input:
// First and the only line of the input contains four single space separated integers i.e

// and D as described in the problem statement.

// Output:
// Output the number of ways to make a colorful straight line.

// Constraints:

// Sample Input

// 2 2 0 0

// Sample Output

// 2

// Time Limit: 1
// Memory Limit: 256
// Source Limit:
// Explanation

// There are two possible arrangements: RBRB or BRBR where 'B' indicates a blue ball and 'R' indicates a red ball.

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
 
function main() {
    
arr = readLine().split(' '); //"1 4 3 2" split into array elements [1, 4, 3, 2] (length: 4, index: 3)
    arr = arr.map(Number);  
      countNumWays(arr);
    
}
function countNumWays(arr) {
    if(arr.length<=4){
        var a = arr[0];
        var b = arr[1];
        var c = arr[2];
        var d = arr[3];
        var allSum = 0;
       if(a==0 && b==0 && c==0 && d==0){console.log("1")}
       else{
          if(a<=10 && b<=10 && c<=10 && d<=10 ){
             allSum+= countBallsWays(a,b,c,d,0)
             allSum+=countBallsWays(a,b,c,d,1)
             allSum+=countBallsWays(a,b,c,d,2)
             allSum+=countBallsWays(a,b,c,d,3)      
            console.log(allSum)
        }
        else{
        console.log("0")
        }
       }
      
         
    }
    else{
        console.log("0")
    }
}
function countBallsWays(a,b,c,d,lastBallPosition){
      if(a==0 && b==0 && c==0 && d==0)
         return 1;
    // No ball available
    if(a<0 || b<0 || c<0 || d<0)
        return 0;
    // lastBallPosition for a 0, b 1, c 2, d 3
    // last ball is a and all balls are unavailable
    if(a==1 || b==0 || c==0 || d==0) {
    if(lastBallPosition==0 && a==1 && b==0 && c==0 && d==0)
        return 1;
    
      // last ball is b and all balls are unavailable
    if(lastBallPosition==1 && a==0 && b==1 && c==0 && d==0)
        return 1;
    
        // last ball is c and all balls are unavailable
    if(lastBallPosition==2 && a==0 && b==0 && c==1 && d==0)
        return 1;
    
        // last ball is d and all balls are unavailable
    if(lastBallPosition==3 && a==0 && b==0 && c==0 && d==1)
        return 1;
    }
 
    // only a is on last position and other balls are on other 3 places
    // countBallsWays(a-1,b,c,d,1) num ways when b is on second position
    // countBallsWays(a-1,b,c,d,2) num ways when c is on second position
    // countBallsWays(a-1,b,c,d,3) num ways when d is on second position
 
    if(lastBallPosition==0)
        return (countBallsWays(a-1,b,c,d,1)) + (countBallsWays(a-1,b,c,d,2)) + (countBallsWays(a-1,b,c,d,3))
    
       if(lastBallPosition==1)
        return (countBallsWays(a,b-1,c,d,0)) + (countBallsWays(a,b-1,c,d,2)) + (countBallsWays(a,b-1,c,d,3))
    
       if(lastBallPosition==2)
        return (countBallsWays(a,b,c-1,d,0)) + (countBallsWays(a,b,c-1,d,1)) + (countBallsWays(a,b,c-1,d,3))
    
       if(lastBallPosition==3)
        return (countBallsWays(a,b,c,d-1,0)) + (countBallsWays(a,b,c,d-1,1)) + (countBallsWays(a,b,c,d-1,2))
    
    return 0;
}