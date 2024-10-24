import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { useUser } from "../../utils/zustand";
export default function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [users, setUsers] = useState([]);

  let { user, setUser } = useUser();

  useEffect(() => {
    api.get("/login").then((res) => setUsers(res.data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    api.get("/login").then((res) => {
      let user = users.find(
        (data) => data.username == username && data.password == password
      );
      if (user) {
        console.log("login");
        setUser(user);
      } else {
        console.log("wrong credentials");
      }
    });
  };

  return (
    <>
      <h1>Login page</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}
