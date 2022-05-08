import React, { useState } from "react";
import styles from "./Paginator.module.css";
import classNames from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <div className={styles.mainDiv}>
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            &lt;
          </button>

          <button
            onClick={() => {
              setPortionNumber((portionNumber = 1));
            }}
          >
            1
          </button>
        </div>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <div className={styles.mainDiv}>
              <span
                className={classNames(
                  {
                    [styles.selectedPage]: currentPage === p,
                  },
                  styles.pageNumber
                )}
                key={p}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            </div>
          );
        })}

      {portionCount > portionNumber && (
        <div className={styles.mainDiv}>
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Paginator;
