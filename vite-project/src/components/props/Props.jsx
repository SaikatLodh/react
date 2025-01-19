import PropsTwo from "./PropsTwo";

const Props = () => {
  const username = [
    { id: 1, name: "sachin", age: 45 },
    { id: 2, name: "messi", age: 37 },
    { id: 3, name: "ronaldo", age: 39 },
  ];
  return (
    <div>
      <h1>
        <PropsTwo dataname={username} />
      </h1>
    </div>
  );
};

export default Props;
