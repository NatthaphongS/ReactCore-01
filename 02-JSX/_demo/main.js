// #1A Vanilla JS-DOM ## Imparativew way
// const header = document.createElement('h1')
// header.innerText='Hello'

// #2A ; Vanilla (React)
// const header = React.createElement("h1",null,'Hello');

// #2B : JSX : Javascript Syntax Extention + Barbel
// const header = React.createElement('h1',null,'hello')
// ============
// const header = <h1>Hello</h1>

const fullName = "John Doe";
const userAge = 43;
const userHobby = "movie";
const isMarried = true;
const exp = ["Driver", "Dev", "Prime minister"];
const userPets = {
  dog: "Jub-Meng",
  cat: "Tong-Poon",
  bird: "Seang-Pin",
};

// original = ['Driver','Dev','Prime minister']
// Expect result =[<li>Driver</li>,<li>Dev</li>,<li>Prime minister</li>]

// const expList = exp.map((item) => <li>{item}</li>);

function myLuckyNumber() {
  return Math.trunc(Math.random() * 10);
}
const styleObj = {
  color: "blue",
  textAlign: "center",
};
// const string = `hello ${userAge}`;
// console.log(string);
// JSX => not render Boolen ********
// JSX => render obj ตรงๆไม่ได้ *******
// JSX : HTML like
const userProfile = (
  <div>
    <h1 className="header">FullName : {fullName}</h1>
    {/* 1Tag == 1React Element == 1Node(Visual-DOM) */}
    {/* 1JSX == 1React Element(HTML like syntax)) */}
    <h4>age : {userAge}</h4>
    <h4>hobby: {userHobby}</h4>
    <h4>isMarried : {isMarried ? "true" : "false"}</h4>
    {/* ******* */}
    <h4>Exprience</h4>
    {/* <ul>{expList}</ul> */}
    <ul>
      {exp.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    {/* <p>{userPets}</p> // render obj ตรงๆไม่ได้ ******* */}
    <p style={styleObj}>Dog : {userPets.dog}</p>
    <h4>MyLuckyNumber : {myLuckyNumber()}</h4>
  </div>
);
// const userProfile = (Value ประเภท JSX)
// กำหนดตัวแปรให้มี Value เป็นประเภท JSX
console.log(userProfile);

// ReactDOM
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(userProfile);
