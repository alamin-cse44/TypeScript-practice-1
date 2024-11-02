const information = (name:string, age:number, role="admin") => {
  console.log({ name, age, role})
}

information('John Doe', 30, 'Software Engineer');
information('John Doe', 30);
