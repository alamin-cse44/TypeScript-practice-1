{
    // assertion function
  const myFunc = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return undefined; // Return undefined for non-string or non-number inputs
    }
  };

  console.log(myFunc("Hello")); // Output: 5

  console.log(myFunc(10)); // Output: 20
}
