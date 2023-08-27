// #1 Write Your Function Component
function Contact() {
  return (
    <>
      <input type="text" placeholder="e-mail"></input>
      <button type="submit">SUBMIT</button>
    </>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Contact />);
