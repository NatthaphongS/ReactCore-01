// #1 React : CreateElement
// <button>Button</button>
const btnEl = React.createElement("button", null, "Button");
// #2 ReactDOM : Takeover and createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : Render Task
root.render(btnEl);
