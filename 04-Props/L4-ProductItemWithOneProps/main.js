// คนเขียน component

// const productDetail ={name:'Macbook' , price:'10000', desc: 'the real power'}
// <ProductItem data={productDetail}/>
// <ProductItem data={{name:'Macbook' , price:'10000', desc: 'the real power'}}/>

function ProductItem(props) {
  // const props = {data : {name:'Macbook' , price:'10000', desc: 'the real power'}}
  return (
    <>
      <h1>{props.data.name}</h1>
      <h2>{props.data.price}</h2>
      <p>{props.data.desc}</p>
    </>
  );
}
function App() {
  return (
    <div className="container">
      <ProductItem
        data={{ name: "Macbook", price: "10000", desc: "the real power" }}
      />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
