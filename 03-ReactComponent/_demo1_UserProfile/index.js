// JSX only
const userProfile = (
  <div className="profile-card">
    <h1>FullName : John Doe</h1>
    <h2>Age : 30</h2>
  </div>
);
const appComponent = (
  <>
    {userProfile}
    {userProfile}
    {userProfile}
  </>
);

// Component
// สร้าง component ได้ 2 วิธี
// 1. Function Component (implement 2018-present) *****
// 2. Class Component (since 2013-present)

// review JS Function (call == reuse logic == Gen Value)
// JS-FN :(data)=>data
function randomInRange(min, max) {
  return min + (max - min) * Math.random();
}
let r = randomInRange(1, 10);
console.log(r);

// Function Component : () => ReactElement |JSX
// การเรียกใช้ Function Component === Reuse JSX === Reuse UI
// ซื่อ function ต้องขึ้นต้นด้วยตัวใหญ่ เพื่อ react จะได้รู้ว่ามันจะ return component
function UserProfileComponent() {
  return <h1>FullName : John Doe</h1>;
}
// และเมื่อมันจะรู้ว่า ruturn component คำว่าcomponentในชื่อเลยไม่จำเป้นแล้ว
// function UserProfile() {
//   return <h1>FullName : John Doe</h1>;
// }
function UserProfile() {
  return (
    <div className="profile-card">
      <h1>FullName : John Doe</h1>
      <h2>Age : 30</h2>
    </div>
  );
}
// let user1 = userProfileComponent();
// user1=<h1>FullName : John Doe</h1>

// ******************* Important **********************
// userProfileComponent() === <UserProfileComponent />
//  SYNTAX : <userComponent /> == การ Call,Invoke,เรียนใช้ Function Component
const app = (
  <div>
    {UserProfile()}
    {/* มีค่าเท่ากับ */}
    <UserProfile />
    {/* เสมือนการสร้าง Tag ขึ้นมาใหม่ */}
  </div>
);

// Biggest component
function App() {
  return (
    <div>
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
{
  /* 
<div id="root">
  <div>
    <h1>FullName : John Doe</h1>
  </div>
</div>; 
*/
}
