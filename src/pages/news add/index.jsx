import { useState } from "react";
import { api } from "../../utils/axios";

export default function NewsAdd() {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let now = new Date();
    api
      .post("/news", { title, body, author, date: now })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <h1>News Add page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add news</button>
      </form>
    </>
  );
}
