function ProductItem(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <ProductItem
        name="Daimond"
        price="135000$"
        desc="the most butiful of daimond ring"
      />
      <ProductItem
        name="Ruby"
        price="105000$"
        desc="the most butiful of ruby ring"
      />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
