function letterGrader(i){
  if (i >= 90) {
    return "A";
  }
  else if (89 >= i && i >= 80) {
    return "B";
  }
  else if (79 >= i && i >= 70) {
    return "C";
  }
  else if (69 >= i && i >= 60 ) {
    return "D";
  }
  else {
    return "F";
  }
}

function averageScore(array) {
  var total=0;
  for(var i in array) {
    total += array[i];
  }
  return Math.floor(total / array.length);
}


function medianScore(array) {
    array.sort( function(a,b) {return a - b;} );
    var half = Math.floor(array.length/2);
    if(array.length % 2) {
        return array[half];
    } else {
        return (array[half-1] + array[half]) / 2.0;
    }
}

function modeScore(array) {
    var counter = {};
    var mode = [];
    var max = 0;
    for (var i in array) {
        if (!(array[i] in counter)){
            counter[array[i]] = 1;
        } else {
          counter[array[i]]++;
        }
        if (counter[array[i]] == max) {
            mode.push(array[i]);
        } else if (counter[array[i]] > max) {
            max = counter[array[i]];
            mode = [array[i]];
        }
    }
    return mode;
}

// array.reduce(function(previousValue, currentValue, index, array){
//   var previousValue = {};
//   var currentValue = 11;
//   var index = 0;
//   var array = [11,20,89,1131];
//   return previousValue[currentValue] = array[index+1];
// });
// //20

// array.reduce(function(previousValue, currentValue, index, array){
//   var previousValue = {};
//   var currentValue = 11;
//   var index = 0;
//   var array = [11,20,89,1131];
//   previousValue[currentValue] = array[index+1] || array[0];
//   return previousValue;
// });

var obj = {
  letterGrader: letterGrader,
  averageScore: averageScore,
  medianScore: medianScore,
  modeScore: modeScore
};

module.exports = obj;
