import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { Link } from "react-router-dom";

export default function UsersPage() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/login").then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      {users.map((user, i) => (
        <div key={i}>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <Link to={"/posts"}>Posts</Link>
        </div>
      ))}
    </>
  );
}
