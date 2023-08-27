// #1 React : JSX
const headerComponent = (
  <header className="container header">
    <nav className="nav">
      <div className="logo">
        <h2>CodeCamp</h2>
      </div>
      <div className="nav_menu" id="nav_menu">
        <ul className="menu_list">
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              account
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              about
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              service
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_menu_link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
const heroComponent = (
  <section className="wrapper">
    <div className="container">
      <div className="grid-cols-2">
        <div className="grid-item-1">
          <h1 className="main-heading">
            Welcome to <span>CodeCamp</span>
            <br />
            Develop anything.
          </h1>
          <p className="info-text">
            Build a beautiful, modern website with flexible components built
            from scratch.
          </p>
          <div className="btn_wrapper">
            <button className="btn view_more_btn">view all pages</button>
            <button className="btn documentation_btn">documentation</button>
          </div>
        </div>
        <div className="grid-item-2">
          <div className="team_img_wrapper">
            <img src="https://i.ibb.co/YkbPPn3/team.png" alt="team-photo" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
const appComponent = (
  <>
    {headerComponent}
    {heroComponent}
  </>
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(appComponent);
