import React from "react";
import "./portfolio.css";

function Portofolio(props: props) {
  const { icon, title, subtitle, paragraf } = props;
  return (
    <div className="wrap_port">
        
      <div>
        <div>
          <img src={icon} alt="port" />
        </div>
        <p className="txt_title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <p className="paragraf">{paragraf}</p>
      </div>
    </div>
  );
}

export default Portofolio;
