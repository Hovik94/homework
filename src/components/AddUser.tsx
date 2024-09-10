import { useContext, useState } from "react";
import { UserContext } from "../context";

export const AddUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }

  const { onAdd } = context;
  const [user, setUser] = useState({ name: "", age: 0, salary: 0 });
  const [error, setError] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user.name.trim() || !user.age || !user.salary) {
      return setError("Please fill the fill");
    }
    setError("");
    onAdd(user);
    setUser({ name: "", age: 0, salary: 0 });
  };
  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <input
            type="text"
            placeholder="write your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <input
            type="number"
            placeholder="write your age"
            value={user.age}
            onChange={(e) =>
              setUser({ ...user, age: Math.max(+e.target.value, 0) })
            }
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <input
            type="number"
            placeholder="write your salary"
            value={user.salary}
            onChange={(e) =>
              setUser({ ...user, salary: Math.max(+e.target.value, 0) })
            }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
