const array = ["Torz", "Mai", "Pete"];

function CreateList(props) {
  <li>{props}</li>;
}
function App() {
  return (
    <div className="container">
      {array.map((name) => (
        <li>{name}</li>
      ))}
    </div>
  );
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
