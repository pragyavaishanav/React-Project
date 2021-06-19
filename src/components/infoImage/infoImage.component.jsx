import React from "react";
import "./infoImage.styles.scss";
function InfoImage(props) {
  const data = props.imageData;
  return (
    <div className="cell-column-1">
      <div className="row-1">{data.imageTitle}</div>
      <div className="row-2">{data.imageTag}</div>
      <div className="row-3">
        <img className="image-row" src={data.src} alt="img" />
      </div>
    </div>
  );
}

export default InfoImage;
