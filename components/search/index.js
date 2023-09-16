"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <p>Try searching for people, topics, or keywords</p>
    </div>
  );
};

function Search() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = (event) => {
    if (
      !event.target.closest(`.${styles.searchInput}`) &&
      !event.target.closest(`.${styles.modal}`)
    ) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      

      window.addEventListener("click", handleModalClose);

      return () => {
        window.removeEventListener("click", handleModalClose);
      };
    }
  }, [modalVisible]);

  return (
    <div className={styles.searchInput}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.searchIcon}
        width="18px"
        fill="grey"
      >
        <g>
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder="Search"
        onClick={handleInputClick}

      />
      {modalVisible && <Modal />}
    </div>
  );
}

export default Search;
