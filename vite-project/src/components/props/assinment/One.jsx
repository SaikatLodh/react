import json from "../json/json";
import Two from "./Two";

const One = () => {
  return (
    <div>
      <Two jsondata={json} />
    </div>
  );
};

export default One;
