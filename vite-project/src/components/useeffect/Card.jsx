import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
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
    <>
      <div>
        {loading ? (
          <p className="font">Loading...</p>
        ) : (
          <div className="container mx-auto">
            <div className="row">
              {cards.map((item) => {
                return (
                  <div className="col-md-4 mb-4" key={item.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                          {item.body.length > 30
                            ? item.body.slice(0, 30) + "..."
                            : item.body}
                        </p>

                        <Link to={`/carddetailes/${item.id}`}>
                          <div className="btn btn-primary">Learn More</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
