function addUniqueElements(array1, array2) {
  // Write your code here
  const mySet = new Set(array1);
  array2.forEach( item => {
    mySet.add(item);
  });

  const myArray = Array.from(mySet);
  return myArray;
}
