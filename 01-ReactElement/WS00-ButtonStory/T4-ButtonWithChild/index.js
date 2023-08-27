// #1 React : CreateElement
/*```html
<button>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>Button</span>
</button>
```*/
// create children
const spanEl = React.createElement("span");
const spanElBtn = React.createElement("span", null, "Button");
// create Parent
const btnEl = React.createElement(
  "button",
  null,
  spanEl,
  spanEl,
  spanEl,
  spanEl,
  spanElBtn
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);
