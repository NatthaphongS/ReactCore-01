// #1 React : CreateElement
{
  /* <div class="logo">
    <h2>CodeCamp</h2>
</div> */
}
const h2 = React.createElement("h2", null, "CodeCamp");
const logo = React.createElement("div", { className: "logo" }, h2);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(logo);
