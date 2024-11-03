{
  // Rest parameters
  const restOperations = (...arr: number[]): number => {
    const sum = 0;
    const double = arr.map((value: number): number => value * value);

    const res = arr.reduce((sum, value) => sum + value);

    return res;
  };

  const res = restOperations(1, 2, 3, 4, 5);
  console.log(res);
}
