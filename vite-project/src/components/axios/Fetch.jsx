import { useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [data, setData] = useState([]);

  useState(() => {
    const getdata = async () => {
      const response = await axios.get(
        `https://tureappservar.onrender.com/student/show`
      );
      setData(response.data.data);
    };

    getdata();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div key={item._id}>{item.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default Fetch;
