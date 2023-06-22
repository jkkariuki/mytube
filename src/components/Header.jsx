import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
function Title() {
  return (
    <div>
      <h1 className="title">
        MyTube <FontAwesomeIcon icon={faPlayCircle} />
      </h1>
    </div>
  );
}

export default Title;
