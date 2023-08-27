// function Subject(props) {
//     // props = {name : "React"}
//     return <h1>Hello {props.name}</h1>;
// }

function Subject(props) {
  console.log(props); // props = {name : "React", lv:5}
  return (
    <h1>
      Hello {props.name} <span>LV : {props.lv}</span>
    </h1>
  );
}

// FunctionComponent == My Custom HTML Tag
function App() {
  return (
    <div>
      <Subject name="React" lv={5} />
      {/* Subject( {name:"React"}  ) */}
      <Subject name="Javascript" lv={3} />
      <Subject name="CSS" lv={50} />
      <Subject name="Express" />
      <Subject lv={99} />
    </div>
  );
}

// JS : App() => ถูก call , เรียกใช้
// React : <App/> => ถูก Render

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
