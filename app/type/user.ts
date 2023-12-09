type User = "Admin" | "User";

enum UsersType {
  ADMIN = "Admin",
  USER = "User 1",
}

let NameA: User = "User";

let PickUser = UsersType.USER;
let PickUser2: User = "User";
console.log(PickUser);
