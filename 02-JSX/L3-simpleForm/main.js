// #1 React : JSX
// <input /> call self closing tag (use when NO need child)
const result = (
  <>
    <label htmlFor="username">Username</label>
    <input className="username" id="username" name="username" />
  </>
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(result);
