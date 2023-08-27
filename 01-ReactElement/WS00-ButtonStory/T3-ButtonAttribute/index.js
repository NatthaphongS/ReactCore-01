// #1 React : CreateElement
// <button class="btn" role="button" type="submit onclick=fn()">Register</button>

const btnEl = React.createElement(
  "button",
  {
    className: "btn",
    role: "button",
    type: "submit",
    onClick: () => alert("Successfully Register"),
  },
  "Register"
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);

// `challenge` alert "Successfully Register" when click button
// function clickBtn(){
//     alert("Successfully Register")
// }
// domRoot.addEventListener('click',clickBtn)
