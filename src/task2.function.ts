{
  
    /**  
    Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
*/

  const information = (name: string, age: number, role = "admin") => {
    console.log({ name, age, role });
  };

  information("John Doe", 30, "Software Engineer");
  information("John Doe", 30);
}
