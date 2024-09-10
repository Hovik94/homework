import { useState } from "react";
import "./App.css";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import type { InputUser, IUser } from "./types";
import { UserContext } from "./context";

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 101, name: "Ani", age: 25, salary: 250000 },
    { id: 102, name: "Karen", age: 28, salary: 100000, isMarried: true },
    { id: 103, name: "Arman", age: 45, salary: 2500000 },
    { id: 104, name: "Nare", age: 20, salary: 300000, isMarried: false },
    { id: 105, name: "Tigran", age: 32, salary: 250000, isMarried: true },
  ]);

  const removeUser = (id: number): void => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = (user: InputUser) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };
  return (
    <>
      <UserContext.Provider
        value={{ users, onRemove: removeUser, onAdd: addUser }}
      >
        <UserList />
        <AddUser />
      </UserContext.Provider>
    </>
  );
}

export default App;
