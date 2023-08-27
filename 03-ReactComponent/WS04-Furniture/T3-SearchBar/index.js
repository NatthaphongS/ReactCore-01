// #1 Write Your Function Component
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text"></input>
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<SearchBar />);
