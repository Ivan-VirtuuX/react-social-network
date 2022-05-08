import React from 'react'
import preloader from "../../../../src/assets/gif/preloader.gif"
import styles from "../../../../src/components/Users/UsersContainer.module.css";

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} className={styles.preloader} alt="" />
    </div>
  );
};
export default Preloader;
