


interface User {
  id: number;
  name: string;
}

async function getUser() {
  return {
    id: 1,
    name: "Alice"
  };
}



// Fix the typing of this function so that TypeScript knows the returned data is a User.
// interface User {
//   id: number;
//   name: string;
// }

// async function getUser(): Promise<User> {
//   return {
//     id: 1,
//     name: "Alice"
//   }as User;
// }
