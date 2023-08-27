// #1 React : CreateElement
{
  /* <li class="nav_menu_item">
    <a href="#" class="nav_menu_link">account</a>
</li> */
}
const aTag = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const account = React.createElement("li", { className: "nav_menu_item" }, aTag);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(account);
