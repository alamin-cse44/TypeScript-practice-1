{
    // Define the reverseString function to reverse a string
  const reverseString = (value: string): string => {
    // Check if the input is a string
    if (typeof value !== "string") {
      return "Input must be a string";
    }

    const res = value.split("").reverse().join("");

    return res;
  };

  console.log(reverseString("Hello, World!"));
}
