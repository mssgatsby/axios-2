import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { useParams } from "react-router-dom";

export default function UpdatePage() {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [author, setAuthor] = useState("");

  let { id } = useParams();

  useEffect(() => {
    api.get(`news/${id}`).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
      setAuthor(res.data.author);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .put(`/news/${id}`, { title, body, author })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <h1>News Add page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Update news</button>
      </form>
    </>
  );
}
