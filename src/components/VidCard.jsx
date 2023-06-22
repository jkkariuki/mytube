import React from "react";

function VidCard(props) {
  return (
    <div>
      <div className="card">
        <iframe
          width="100%"
          height="200"
          src={props.url}
          title="How to Invest in Multifamily Real Estate on a Middle-Class Salary"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
        <div className="card-body">
          <h5>{props.title}</h5>
          <p className="card-text">Category:{props.category}</p>
        </div>
      </div>
    </div>
  );
}

export default VidCard;
