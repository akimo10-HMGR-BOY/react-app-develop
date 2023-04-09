import React from "react";
import { Link } from "react-router-dom";

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 999, // Headerを最前面に表示するための設定
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    margin: "0 10px",
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>React Develop</h1>
      <nav style={styles.nav}>
        <ul>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/components-list" style={styles.link}>
            Parts-List
          </Link>
          <Link to="/chatgpt-dev" style={styles.link}>
            ChatGpt
          </Link>
          <Link to="/line" style={styles.link}>
            Line
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
