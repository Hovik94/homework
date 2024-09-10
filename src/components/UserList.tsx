import { useContext } from "react";
import { UserContext } from "../context";

export const UserList = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("error");
  }

  const { users, onRemove } = context;
  return (
    <>
      <h3>User List</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
              <td>
                <button onClick={() => onRemove(user.id)}>remove user</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
