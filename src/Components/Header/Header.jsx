import { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const { key } = useParams();
  const [getText, setText] = useState("");
  const handleChange = (e) => {
    const keyword = e.target.value;
    setText(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getText.trim().length) {
      alert("키워드를 입력해주세요.");
      return;
    }

    navigate(`videos/${getText}`);
    setText("");
  };

  useEffect(() => setText(key || ""), [key]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <BsYoutube />
        <h1 role="presentation" onClick={() => navigate("/")}>
          Youtube
        </h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.searchBox}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search here"
          value={getText}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
