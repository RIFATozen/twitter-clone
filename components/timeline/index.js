"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import Search from "../search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const tweetItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
        </g>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
        </g>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
        </g>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
        </g>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
        </g>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
        </g>
      </svg>
    ),
  },
];

const menuItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
        </g>
      </svg>
    ),
    label: "Home",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </g>
      </svg>
    ),
    label: "Explore",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
        </g>
      </svg>
    ),
    label: "Notifications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
        </g>
      </svg>
    ),
    label: "Messages",
  },
];

const activeMenuItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
        </g>
      </svg>
    ),
    label: "Home",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
        </g>
      </svg>
    ),
    label: "Explore",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
        </g>
      </svg>
    ),
    label: "Notifications",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width="26.25px">
        <g>
          <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
        </g>
      </svg>
    ),
    label: "Messages",
  },
];

function Timeline({ params }) {
  const [following, setFollowing] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [empty, setIsEmpty] = useState(true);
  const pathname = usePathname();

  const changeFollowing = (e) => {
    setFollowing(e.target.textContent);
  };

  const divRef = useRef(null);

  const placeholder = "What is happening?!";

  const handleDivBlur = () => {
    const contentDiv = divRef.current;
    if (contentDiv.textContent.trim() === "") {
      setIsClicked(false);
    }
  };

  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const newContent = e.target.textContent;
    setContent(newContent);
    if (newContent.trim() !== "") {
      setIsEmpty(false);
    } else if (newContent.trim() === "") {
      setIsEmpty(true);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    divRef.current.focus();
    divRef.current.style.color = "white";
  };

  return (
    <div className={styles.timeline}>
      {params.blog === "home" && (
        <>
          <div className={styles.title}>
            <div style={{ cursor: "pointer", fontWeight: 700 }}>Home</div>
            <div className={styles.content}>
              <div onClick={changeFollowing}>
                <div>
                  <h6
                    style={
                      following === "For you" || following === ""
                        ? { color: "white", fontWeight: "600" }
                        : { color: "grey" }
                    }
                  >
                    For you
                  </h6>
                  <div
                    className={
                      following === "For you" || following === ""
                        ? styles.blue
                        : styles.notblue
                    }
                  ></div>
                </div>
              </div>
              <div onClick={changeFollowing}>
                <div>
                  <h6
                    style={
                      following === "Following"
                        ? { color: "white", fontWeight: "600" }
                        : { color: "grey" }
                    }
                  >
                    Following
                  </h6>
                  <div
                    className={
                      following === "Following" ? styles.blue : styles.notblue
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tweet}>
            <div>
              <Image src="/pp.jpg" width={40} height={40} alt="pp" />
            </div>
            <div className={styles.tweet_ornamental}>
              <div>
                <div
                  className={styles.editableDiv}
                  contentEditable="true"
                  ref={divRef}
                  onBlur={handleDivBlur}
                  onInput={handleInput}
                ></div>
                <div
                  className={isClicked ? styles.clicked : styles.notclicked}
                  onClick={handleClick}
                >
                  What is happening?!
                </div>
              </div>
              <div>
                <div className={styles.tweeticon}>
                  {tweetItems.map((item, index) => (
                    <div key={index}>{item.icon}</div>
                  ))}
                </div>
                <div>
                  <button className={empty ? styles.empty : styles.notempty}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {params.blog === "explore" && (
        <>
          <div className={styles.search}>
            <Search />
          </div>
        </>
      )}
      {params.blog === "notifications" && (
        <>
          <div className={styles.title}>
            <div style={{ cursor: "pointer", fontWeight: 700 }}>Home</div>
            <div className={styles.content}>
              <div onClick={changeFollowing}>
                <div>
                  <h6
                    style={
                      following === "All" || following === ""
                        ? { color: "white", fontWeight: "600" }
                        : { color: "grey" }
                    }
                  >
                    All
                  </h6>
                  <div
                    className={
                      following === "All" || following === ""
                        ? styles.blue
                        : styles.notblue
                    }
                  ></div>
                </div>
              </div>
              <div onClick={changeFollowing}>
                <div>
                  <h6
                    style={
                      following === "Verified"
                        ? { color: "white", fontWeight: "600" }
                        : { color: "grey" }
                    }
                  >
                    Verified
                  </h6>
                  <div
                    className={
                      following === "Verified" ? styles.blue : styles.notblue
                    }
                  ></div>
                </div>
              </div>
              <div onClick={changeFollowing}>
                <div>
                  <h6
                    style={
                      following === "Mentions"
                        ? { color: "white", fontWeight: "600" }
                        : { color: "grey" }
                    }
                  >
                    Mentions
                  </h6>
                  <div
                    className={
                      following === "Mentions" ? styles.blue : styles.notblue
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.banner}>
        {menuItems.map((item, index) => (
          <Link href={`/${item.label.toLowerCase()}`} key={index}>
            <div className={styles.icons}>
              {pathname.slice(1) === item.label.toLowerCase() ? (
                <>{activeMenuItems[index].icon}</>
              ) : (
                <>{item.icon}</>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
