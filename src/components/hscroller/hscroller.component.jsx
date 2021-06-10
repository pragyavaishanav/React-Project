import React from "react";
import "./hscroller.styles.scss";

const Hscroller = () => {
  return (
    <div>
      <div>
        <ol>
          <a href="#1">1</a>
          <a href="#2">2</a>
          <a href="#3">3</a>
          <a href="#4">4</a>
        </ol>
      </div>
      <div class="flex-container">
        <div id="1" class="box splash">
          1
        </div>
        <div id="2" class="box">
          2
        </div>
        <div id="3" class="box">
          3
        </div>
        <div id="4" class="box">
          4
        </div>
      </div>
    </div>
  );
};

export default Hscroller;
