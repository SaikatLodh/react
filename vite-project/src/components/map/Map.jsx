const Map = () => {
  const student = [{ id: 1, name: "saikat", subject: "Web dev" }];
  return (
    <div>
      {student.map((item, index) => {
        return (
          <>
            <div key={index}>
              {item.id}
              {item.name}
              {item.subject}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Map;
