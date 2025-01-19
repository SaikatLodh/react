const Onclick = () => {
  const click = () => {
    console.log("click function is called");
    alert("hi");
    console.log("click function is finished");
  };

  const clickParamiter = (e) => {
    alert(e);
  };
  return (
    <div>
      <h1 onClick={click}>click one</h1>
      <h1 onClick={() => clickParamiter("hi2")}>click two</h1>
    </div>
  );
};

export default Onclick;
