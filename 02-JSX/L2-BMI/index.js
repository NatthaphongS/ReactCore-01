// #1 React : JSX
const height = 168;
const weight = 61.4;
function calBMI(height, weight) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(<h1>My BMI is {calBMI(height, weight)}</h1>);
