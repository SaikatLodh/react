const PropsTwo = (props) => {
  const user = props.dataname;

  return (
    <div>
      {user.map((item, key) => {
        return (
          <>
            <div key={key}>
              id : {key + 1}
              name:{item.name}
              age:{item.age}
              <br />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PropsTwo;
