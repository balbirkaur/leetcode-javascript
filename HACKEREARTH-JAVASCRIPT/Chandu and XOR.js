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
    var b = readLine().split(' ');  //n = 4
     var n = b[0];
     var m = b[1];
     var arr = [];
     for(var r=0; r<n; r++){
        arr[r] = readLine().split(' '); 
     }
   for (let i = 0; i < arr.length; i++) {
        
        arr[i] = arr[i].filter(function( element ) {
   return element !== "";
});
    }
 
//MY CODE BEGINS HERE 

   grid(n,m,arr);
}

// Write your code here
function grid(n,m,arr){
    var addRow=[];
    var addColumn=[];
    var finalMax = [];
    var newArr = [];
    for (var a=0; a<n; a++) {
         newArr.push(arr[a].map(Number));
    }

    for (var i=0; i<n; i++) {
        var sumRow=0;
        for (var j=0; j<m; j++) {
            sumRow+=newArr[i][j];
        }
        addRow.push(sumRow)
    }

     for (var e=0; e<m; e++) {
          var sumColumn=0;
        for (var f=0; f<n; f++) {
                sumColumn+=newArr[f][e];
        }
        addColumn.push(sumColumn)
     }
    for (var k=0; k<addRow.length; k++) {
        for (var l=0; l<addColumn.length; l++) {
            var sumSColumn=0;
                sumSColumn=addColumn[l]^addRow[k];
                finalMax.push(sumSColumn);
        }
    }
     var finalResult = finalMax.reduce((acc,cur)=>Math.max(acc,cur));
     console.log(finalResult);
}
   

