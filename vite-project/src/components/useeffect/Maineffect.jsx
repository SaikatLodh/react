import React, { useEffect, useState } from "react";
import Card from "./Card";

const Maineffect = () => {
  const [cards, setcard] = useState([]);
  const [loading, setLoading] = useState(true);

  const getcard = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setcard(data);
    setLoading(false);
  };

  useEffect(() => {
    getcard();
  }, []);

  return (
    <div>
      <Card cards={cards} loading={loading} />
    </div>
  );
};

export default Maineffect;
