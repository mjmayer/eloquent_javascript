// Your code here.
function arrayToList(array) {
  for (i=array.length - 1; i >= 0; i--) {
    if (i + 1 === array.length ){
      list = { "value": array[i], "rest": null};
    }
    else {
      list = { "value": array[i], list };
    }
  }
  return list;
}

function listToArray(list) {
  array = [];
  for (let node = list; node; node=node.rest) {
    console.log(node);
    array = array + node["value"];
  }
  return array;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
