{
    // optional chainging parameters
  const age: number = 18;

  const isAdmin = age >= 18 ? "admin" : "user";

  // console.log(isAdmin)

  type Address = {
    street: string;
    city?: string;
    country?: string;
  };

  type Contact = {
    phone?: string;
    address: Address;
  };

  type Employee = {
    name: string;
    contact?: Contact;
  };

  const getEmployeeCity = (employee: Employee): string => {
    return employee.contact?.address.city || "Unknown";
  };

  const employees = [
    {
      name: "John Doe",
      contact: {
        phone: "123-456-7890",
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA",
        },
      },
    },
    {
      name: "Jane Smith",
      contact: {
        address: {
          street: "456 Elm St",
          country: "Canada",
        },
      },
    },
  ];

  employees.forEach((employee) => {
    console.log(`Employee's city :  ${getEmployeeCity(employee)}`);
  });
}
