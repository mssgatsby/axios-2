import { useEffect, useState } from "react";
import { api } from "../../utils/axios";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/zustand";

export default function NewsPage() {
  const [news, setNews] = useState([]);

  let { user, setUser } = useUser();

  useEffect(() => {
    api.get("/news").then((res) => setNews(res.data));
  }, []);

  return (
    <>
      <h1>{user?.name}</h1>
      {news.map((news) => {
        let dateFormat = new Date(news.date);
        return (
          <div>
            <h1>{news.title}</h1>
            <p>{news.body}</p>
            <h3>{news.author}</h3>
            <p>
              {dateFormat.getDate()}/{dateFormat.getMonth()}/
              {dateFormat.getFullYear()}
            </p>
            <Link to={`/single/${news._id}`}>Single</Link> <br />
            <Link to={`/update/${news._id}`}>Update</Link>
          </div>
        );
      })}
    </>
  );
}
