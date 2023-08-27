// #1 React : CreateElement
{
  /* <h1 class="main-heading">
    Welcome to <span>Codecamp.</span>
    <br />
    Develop anything.
</h1> */
}
const br = React.createElement("br");
const span = React.createElement("span", null, "Codecamp.");
const detail = ["Welcome to", span, br, "Develop anything."];
const h1 = React.createElement("h1", { className: "main-heading" }, detail);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(h1);
