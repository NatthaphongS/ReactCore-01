// #1 React : CreateElement
const btn1 = React.createElement(
  "button",
  { className: "btn view_more_btn" },
  "view all pages"
);
const btn2 = React.createElement(
  "button",
  { className: "btn documentation_btn" },
  "documentation"
);
const btn = React.createElement(
  "div",
  { className: "btn_wrapper" },
  btn1,
  btn2
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btn);
