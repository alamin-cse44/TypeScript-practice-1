{
  // nullish operation
  const getDisplayName = (value: string | null | undefined): string => {
    return value ?? "Anonymous";
  };

  console.log(getDisplayName("John Doe")); // Output: John Doe

  console.log(getDisplayName(null)); // Output: Anonymous

//   unknown operation

   const processData = (data: unknown): string | number => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data*data;
    } else {
      return "Invalid data type";
    }
   }

   console.log(processData("Hello")); // Output: HELLO
   console.log(processData(10)); // Output: 100

   // never reached

   const handleError = (message: string): never => {
    throw new Error(message);
   }

   handleError("An error occurred"); // This will throw an error
}
