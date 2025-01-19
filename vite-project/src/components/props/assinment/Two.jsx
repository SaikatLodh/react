import React from "react";

const Two = ({ jsondata }) => {
  return (
    <div>
      {jsondata.map((item) => {
        return (
          <>
            <div key={item.id}> name:{item.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default Two;
