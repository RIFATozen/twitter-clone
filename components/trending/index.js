import React from "react";
import styles from "./styles.module.css";
import Trend from "../trend";
import Person from "../person";
import Search from "../search";
import Link from "next/link";

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
          <Link href="#">Terms of Service</Link>
        </div>
        <div>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div>
          <Link href="#">Cookie Policy</Link>
        </div>
        <div>
          <Link href="#">Imprint</Link>
        </div>
        <div>
          <Link href="#">Accessibility</Link>
        </div>
        <div>
          <Link href="#">Ads info</Link>
        </div>
        <div>
          <Link href="#">
            <div>
              More
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="grey"
                width="13px"
              >
                <g>
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#">© 2023 X Corp.</Link>
        </div>
      </div>
    </div>
  );
}

export default Trending;
