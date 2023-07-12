import React from "react";
import "./package.css";

function Package(props: props) {
  const { title, paragraf, icon } = props;
  return (
    <div className="card">
      <div>
        <img src={icon} alt="web" />
      </div>
      <p className="title">{title}</p>
      <p className="paragraf">{paragraf}</p>
    </div>
  );
}

export default Package;
