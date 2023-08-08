import React from "react";
import styles from "./styles.module.css";
import Trend from "../trend";
import Person from "../person";
import Search from "../search";

function Trending() {
  return (
    <div className={styles.trending}>
      <Search />
      <div className={styles.verified}>
        <h2>Get Verified</h2>
        <p>Subscribe to unlock new features</p>
        <button>Get Verified</button>
      </div>
      <div className={styles.trends}>
        <h2>Trends for you</h2>
        <Trend />
      </div>
      <div className={styles.person}>
        <h2>Who to follow</h2>
        <Person />
      </div>
      <div className={styles.footer}>
        <div>
          <a href="#">Terms of Service</a>
        </div>
        <div>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <a href="#">Cookie Policy</a>
        </div>
        <div>
          <a href="#">Imprint</a>
        </div>
        <div>
          <a href="#">Accessibility</a>
        </div>
        <div>
          <a href="#">Ads info</a>
        </div>
        <div>
          <a href="#">More</a>
        </div>
        <div>
          <a href="#">© 2023 X Corp.</a>
        </div>
      </div>
    </div>
  );
}

export default Trending;
