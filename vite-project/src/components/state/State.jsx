import React, { useState } from "react";

const State = () => {
  const details = {
    name: "saikat",
    age: 25,
  };
  const [name, SetName] = useState(details);
  return (
    <div>
      {name.name}
      {name.age}
    </div>
  );
};

export default State;
