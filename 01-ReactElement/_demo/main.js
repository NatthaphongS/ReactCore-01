// console.log('JS is coming')

// Vanilla (JS COM API)
// create element
// const btn =document.createElement('button')
// console.log(btn)
// btn.innerText = 'cart';
// btn.classList ='red'
// Render
// const root = document.getElementById('root');
// root.appendChild(btn);
// ## React
// React === Global Object (via CDN Link)
// console.log(React)
// console.log(typeof(React))

// Create Element
// <button class='red'>cart</button>
const reactElement = React.createElement(
  "button",
  { className: "blue" },
  "cart"
);
console.log(reactElement);

// ReactDOM : Render to browser
// console.log(ReactDOM)
// PickDOM
const domRoot = document.getElementById("root");
// Takeover
const root = ReactDOM.createRoot(domRoot);
// Render
root.render(reactElement);

// Key-1
// ReactElement =JS Object ที่เอาไป render ใน browserได้
// สร้างโดย React.createElement(tag,propsObj,...children);
