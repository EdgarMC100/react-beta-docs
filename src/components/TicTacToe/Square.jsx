import React from "react";
import styles from "./Square.module.css";
import "./index.css";
export default function Square() {
  const renderBoard = () => {
    const elements = 9;
    const jsxElement = (id) => (
      <button className="square" key={id}>
        X
      </button>
    );
    let jsxElements = [];
    let jsxElements2 = [];
    for (let index = 0; index < elements; index++) {
      jsxElements.push(jsxElement(index));
      if ((index + 1) % 3 == 0) {
        console.log("e");
        jsxElements2.push(
          <div className={styles.boardRow} key={index}>
            {jsxElements.slice(index - 2, index + 1)}
          </div>
        );
      }
    }
    console.log(jsxElements);
    return jsxElements2;
  };

  return (
    <div
    // style={{
    //   display: "grid",
    //   gridTemplateColumns: "1fr 1fr 1fr",
    //   gap: "1rem",
    // }}
    >
      {renderBoard()}
    </div>
  );
}
