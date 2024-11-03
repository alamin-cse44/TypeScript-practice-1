{
    // intersection with function
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `name: ${user.name}, email: ${user.email}, level: ${user.adminLevel}`;
  };
  const user: AdminUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    adminLevel: "Super Admin",
  };
  const res = describeAdmin(user);

  console.log(res);
}
