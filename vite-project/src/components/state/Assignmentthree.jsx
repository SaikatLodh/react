import React, { useState } from "react";

const Assignmentthree = () => {
  const obj = {
    name: "saikat",
    age: 25,
    subject: "web development",
  };
  const [object, setobject] = useState(obj);
  return (
    <div>
      {object.name}
      {object.age}
      {object.subject}

      <button onClick={() => setobject({ ...obj, name: "roni", age: 30 })}>
        update
      </button>
    </div>
  );
};

export default Assignmentthree;
