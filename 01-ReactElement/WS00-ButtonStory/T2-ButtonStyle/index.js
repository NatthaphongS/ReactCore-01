// #1 React : CreateElement
// <button class="btn">Button</button>
const btnEl = React.createElement("button", { className: "btn" }, "Button");

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot); // takeover to visual DOM
// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);
