// photo
function HeroImg() {
  return (
    <div className="hero-img">
      <img src="./mainImage.png"></img>
      {/* image in css */}
    </div>
  );
}
// header
function H1() {
  return (
    <div className="header">
      <h1>Discover authentic</h1>
      <h1>Japanese crusine in LA.</h1>
      <h1>Opening Soon!</h1>
    </div>
  );
}
// info text
function Paragraph1() {
  return (
    <p>
      Welcome to Hensui, the newest addition to the vibrant Los Angeles dining
      scene! Our restaurant is dedicated to bringing you the most authentic and
      delicious Japanese cuisine.
    </p>
  );
}
function Paragraph2() {
  return (
    <p>
      Stay tuned for our grand opening date, sign up with your e-mail address to
      get notified.{" "}
    </p>
  );
}
function Paragraph() {
  return (
    <div className="info">
      <Paragraph1 />
      <br></br>
      <Paragraph2 />
    </div>
  );
}
function Contact() {
  return (
    <div className="input">
      <input type="text" placeholder="e-mail"></input>
      <button type="submit">SUBMIT</button>
    </div>
  );
}

// #1 React : CreateElement
function App() {
  return (
    <main>
      <HeroImg />
      <div className="right">
        {/* logo */}
        <div className="logo"></div>
        {/* maininfo */}
        <div className="main-info">
          <H1 />
          <Paragraph />
          <Contact />
        </div>
      </div>
    </main>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
