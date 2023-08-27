// #1 React : CreateElement
function HeroImg() {
  return (
    <div className="hero-img">
      <img src="./image.png" alt="hero-photo" />;
    </div>
  );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<HeroImg />);
