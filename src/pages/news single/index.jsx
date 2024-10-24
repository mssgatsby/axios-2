import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/axios";

export default function SinglePage() {
  let { id } = useParams();
  let [news, setNews] = useState({});

  useEffect(() => {
    api.get(`/news/${id}`).then((res) => setNews(res.data));
  });

  const deleteUser = (id) => {
    api.delete(`/news${id}`);
  };

  return (
    <>
      <div>
        <h1>{news.title}</h1>
        <p>{news.body}</p>
        <h3>{news.author}</h3>
        <button onClick={() => deleteUser(news._id)}>Delete</button>
      </div>
    </>
  );
}
