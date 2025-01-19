import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Carddeatails = () => {
  const [crad, setCard] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getdata = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await response.json();
    setCard(data);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>
          <p className="font">Loading</p>
        </div>
      ) : (
        <div>
          <div>
            <div className="col-md-4 mb-4" key={crad.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{crad.title}</h5>
                  <p className="card-text">{crad.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carddeatails;
