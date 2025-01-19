import React, { useState } from "react";

const Assignment = () => {
  const [name, setName] = useState("saikat");

  const button = () => {
    if (name === "saikat") {
      setName("roni");
    } else {
      setName("saikat");
    }
  };
  return (
    <div>
      name:{name}
      <button onClick={button}></button>
    </div>
  );
};

export default Assignment;
