import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const query = router.pathname;

  return (
    <header>
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="/" className="navbar-item">
            <div style={{ display: "flex" }}>
              <img className="logo" src="logo.png" alt="logo" />

              <h2
                style={{ color: "#666666", fontWeight: 600 }}
                className="title is-size-4 logoText"
              >
                MedBlocks
              </h2>
            </div>
          </a>
          <a
            onClick={() => setClicked(!clicked)}
            className={`navbar-burger ${clicked ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>{" "}
        <div className="navbar-menu">
          <div style={{ marginTop: "5px" }} className="navbar-end">
            <a
              href="/projects"
              className={`button ${
                query === "/projects" ? "is-light" : "is-white"
              }`}
            >
              Projects
            </a>

            <a
              href="/jobs"
              className={`button ${
                query === "/jobs" ? "is-light" : "is-white"
              }`}
            >
              Jobs
            </a>
            <a
              target="_blank"
              href="https://blog.medblocks.org/"
              className="button is-white"
            >
              Blog
            </a>
            <a
              target="_blank"
              href="https://github.com/sidharthramesh/medblocks"
              className="button is-white"
            >
              Github
            </a>
          </div>
        </div>
        {clicked ? <MobileMenu /> : ""}
      </nav>
    </header>
  );
}

const MobileMenu = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 5, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
    >
      <div style={{ padding: "10px" }} className="navbar-start">
        <a href="/projects" className="navbar-item">
          Projects
        </a>

        <a href="/jobs" className="navbar-item">
          Jobs
        </a>
        <a
          target="_blank"
          href="https://blog.medblocks.org/"
          className="navbar-item"
        >
          Blog
        </a>
        <a
          target="_blank"
          href="https://github.com/sidharthramesh/medblocks"
          className="navbar-item"
        >
          Github
        </a>
      </div>
    </motion.div>
  );
};
