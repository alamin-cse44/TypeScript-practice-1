{
  // generic with function
  const removeDuplicatesFilter = <T>(arr: T[]): T[] => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  };

  const arr = [1, 2, 3, 2, 1, 4, 5, 6, 4, 5];

  const result = removeDuplicatesFilter(arr);
  console.log(result);

  const str = ["a", "b", "c", "d", "b", "c"];

  const resultStr = removeDuplicatesFilter(str);

  console.log(resultStr);
}
