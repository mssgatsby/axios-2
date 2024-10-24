import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import NewsAdd from "./pages/news add";
import NewsPage from "./pages/news";
import SinglePage from "./pages/news single";
import UpdatePage from "./pages/news update";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/newsadd"}>News Add</Link>
        </li>
        <li>
          <Link to={"/news"}>News</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newsadd" element={<NewsAdd />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </>
  );
}

export default App;
