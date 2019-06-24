// Your code here.
function arrayToList(array) {
  for (i=array.length - 1; i >= 0; i--) {
    if (i + 1 === array.length ){
      list = { "value": array[i], "rest": null};
    }
    else {
      list = { "value": array[i], rest: list };
    }
  }
  return list;
}

function listToArray(list) {
  array = [];
  for (let node = list; node; node=node.rest) {
    array.push(node["value"]);
  }
  return array;
}

function prepend(value, rest) {
  let list = { "value": value, "rest": rest}
  return list
}

function nth (list, number) {
  let array = listToArray(list);
  return array[number];
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
