// ############################### 8 ###########################
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
// ##################### 9 ############################
// 3 HEADING
const br = React.createElement("br");
const span = React.createElement("span", null, "Codecamp.");
const detail3 = ["Welcome to ", span, br, "Develop anything."];
const h1 = React.createElement("h1", { className: "main-heading" }, detail3);
//1 info
const detail1 =
  "Build a beautiful, modern website with flexible components built from scratch.";
const infoText = React.createElement("p", { className: "info-text" }, detail1);
//2 button
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
// 4 img
const props = {
  src: "https://i.ibb.co/mhcL2P6/image.png",
  alt: "team-photo",
};
const img = React.createElement("img", props);
const divImg = React.createElement(
  "div",
  { className: "team_img_wrapper" },
  img
);

// #1 React : CreateElement
const gi1 = React.createElement(
  "div",
  { className: "grid-item-1" },
  h1,
  infoText,
  btn
);
const gi2 = React.createElement("div", { className: "grid-item-2" }, divImg);
const gc2 = React.createElement("div", { className: "grid-cols-2" }, gi1, gi2);
const container = React.createElement("div", { className: "container" }, gc2);
const wrapper = React.createElement("div", { className: "wrapper" }, container);
//################################# 10 #####################################
// #1 React : CreateElement
const main = React.createElement(React.Fragment, null, header, wrapper);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(main);
