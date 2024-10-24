import { useState } from "react";
import { api } from "../../utils/axios";

export default function RegisterPage() {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/login", { name, username, password })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <h1>Registration page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button>Register</button>
      </form>
    </>
  );
}
