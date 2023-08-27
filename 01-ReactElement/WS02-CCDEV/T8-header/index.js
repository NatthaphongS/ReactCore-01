// From 7

// #1 React : CreateElement
function makeLiTag(detail) {
  let aTag = React.createElement(
    "a",
    { href: "#", className: "nav_menu_link" },
    detail
  );

  return React.createElement("li", { className: "nav_menu_item" }, aTag);
}
const account = makeLiTag("account");
const about = makeLiTag("about");
const service = makeLiTag("service");
const contact = makeLiTag("contact");
const ul = React.createElement(
  "ul",
  { className: "nav_menu_list" },
  account,
  about,
  service,
  contact
);

// #######################################################
// #1 React : CreateElement
const navMenu = React.createElement(
  "div",
  { className: "nav_menu", id: "nav_menu" },
  ul
);
const h2 = React.createElement("h2", null, "CodeCamp");
const navLogo = React.createElement("div", { className: "logo" }, h2);
const nav = React.createElement("nav", { className: "nav" }, navLogo, navMenu);
const header = React.createElement(
  "nav",
  { className: "container header" },
  nav
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(header);
