import { useReducer } from "react";


const Usereduce = () => {
  const initialstate = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "incriment":
        return { ...state, count: state.count + 1 };

      case "decriment":
        return { ...state, count: state.count - 1 };

      case "reset":
        return { ...state, count: 0 };

      default:
        state.count;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);

  // const {obj} = useSearch()

  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: "incriment" })}>incriment</button>
      <button onClick={() => dispatch({ type: "decriment" })}>decriment</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {/* {obj.name} */}
    </div>
  );
};

export default Usereduce;
