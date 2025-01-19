import "../css/style.css";

const Css = () => {
  const textColor = {
    color: "green",
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>hi</h1>
      <h1 style={textColor}>hi</h1>
      <h1 className="text">hi</h1>
    </div>
  );
};

export default Css;
