// #1 React : JSX
const fullName = "Natthaphong Sinsupharoek";
const birthYear = 1997;
const CURENT_YEAR = 2023;
let textColor = "text-blue";
const result = (
  <>
    <h1 className="text-blue">{fullName}</h1>
    <p className={textColor}>My age : {CURENT_YEAR - birthYear}</p>
  </>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(result);
