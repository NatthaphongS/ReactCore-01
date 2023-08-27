// #1 Write Your Function Component
function H1() {
  return (
    <>
      <h1>Discover authentic</h1>
      <h1>Japanese crusine in LA.</h1>
      <h1>Opening Soon!</h1>
    </>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<H1 />);
