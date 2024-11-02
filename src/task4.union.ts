
 
  // Union type
  interface Book {
    title: string;
    author: string;
    publicationYear: number;
  }
  interface Magazine {
    publisher: string;
    issueNumber: number;
  }
 
 const book1 : Book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
  };
  const magazine1 : Magazine = {
    publisher: 'National Geographic',
    issueNumber: 1,
  };

//  type Union = Book | Magazine;

//  const test: Union = {
//     title: 'National Geographic',
//     publisher: 'National Geographic',
//     issueNumber: 1,
//   };

//   console.log(test);
 

type Intersection = Book & Magazine; 

const test2: Intersection = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
    publisher: 'National Geographic',
    issueNumber: 1,
  };

  console.log(test2);
