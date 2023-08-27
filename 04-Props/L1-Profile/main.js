function GenProfile(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>Age : {props.age}</h2>
    </>
  );
}
function App() {
  return (
    <div className="container">
      <GenProfile name="John Doe" age="27" />
      <GenProfile name="JK Rolling" age="45" />
      {GenProfile({ name: "Bad Practice", age: "00" })}
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
