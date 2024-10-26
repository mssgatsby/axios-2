import { Navigate } from "react-router-dom";
import { useUser } from "../../utils/zustand";

export default function About() {
  const { user, setUser } = useUser();

  if (!user?.name) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div>
        <h1>{user?.name}</h1>
        <h2>{user?.username}</h2>
      </div>
    </>
  );
}
