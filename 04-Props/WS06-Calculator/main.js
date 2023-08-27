function Calculator() {
  return (
    <div className="container">
      <div className="calculator">
        <div className="window">
          <p className="result">0</p>
        </div>
        <div className="console">
          <div className="leftpanel">
            <div className="leftpanel_upper">
              <div className="clear">C</div>
              <div className="pos_neg">&#177;</div>
              <div className="percent">&#37;</div>
            </div>
            <div className="leftpanel_lowwer">
              <div>
                <div className="n7">7</div>
                <div className="n8">8</div>
                <div className="n9">9</div>
              </div>
              <div>
                <div className="n4">4</div>
                <div className="n5">5</div>
                <div className="n6">6</div>
              </div>
              <div>
                <div className="n3">3</div>
                <div className="n2">2</div>
                <div className="n1">1</div>
              </div>
              <div>
                <div className="n0">0</div>
                <div className=".">.</div>
                <div className="del">&#8592;</div>
              </div>
            </div>
          </div>
          <div className="rightpanel">
            <div className="division">&#247;</div>
            <div className="multi">&#215;</div>
            <div className="minus">&#8722;</div>
            <div className="sum">&#43;</div>
            <div className="equal">&#61;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<Calculator />);
