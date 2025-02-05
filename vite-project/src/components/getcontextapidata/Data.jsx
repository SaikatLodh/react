import { useApicontext } from "../contextapi/Createcontex";

const Data = () => {
  const { data } = useApicontext();

  return (
    <div>
      {data.map((item, key) => {
        return <div key={key}>{item.name}</div>;
      })}
    </div>
  );
};

export default Data;
