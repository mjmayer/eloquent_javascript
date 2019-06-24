// Your code here.
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if ((typeof(obj1) == "object" && typeof(obj2) == "object") && (obj1 != null || obj2 != null)) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
    for (let key of Object.keys(obj1)) {
      if (!Object.keys(obj2).includes(key)|| !deepEqual(obj1[key], obj2[key])) return false;
    }
  }
  else if (obj1 != obj2) {
    return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
