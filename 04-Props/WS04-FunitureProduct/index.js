const productList = [
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 30,
    src: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 0,
    src: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolita",
    desc: "Luxury big sofa",
    price: 70000,
    status: "old",
    discount: 50,
    src: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: 50000,
    status: "new",
    discount: 0,
    src: "https://i.ibb.co/xhcKJXh/respira.png",
  },
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 30,
    src: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 0,
    src: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolita",
    desc: "Luxury big sofa",
    price: 70000,
    status: "old",
    discount: 50,
    src: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: 50000,
    status: "new",
    discount: 0,
    src: "https://i.ibb.co/xhcKJXh/respira.png",
  },
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 30,
    src: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 0,
    src: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolita",
    desc: "Luxury big sofa",
    price: 70000,
    status: "old",
    discount: 50,
    src: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: 50000,
    status: "new",
    discount: 0,
    src: "https://i.ibb.co/xhcKJXh/respira.png",
  },
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 30,
    src: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: 35000,
    status: "old",
    discount: 0,
    src: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolita",
    desc: "Luxury big sofa",
    price: 70000,
    status: "old",
    discount: 50,
    src: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: 50000,
    status: "new",
    discount: 0,
    src: "https://i.ibb.co/xhcKJXh/respira.png",
  },
];
function ProductCard() {
  return productList.map((obj) => {
    if (obj.status == "old") {
      if (obj.discount == 0) {
        return (
          <div className="card">
            <img src={obj.src} />
            <div className="card_info">
              <h1>{obj.name}</h1>
              <p>{obj.desc}</p>
              <div className="card_info_price">
                <p className="final_price">
                  Rp {obj.price * (1 - obj.discount / 100)}
                </p>
                <p className="full_price"></p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="card">
            <img src={obj.src} />
            <div className="discount">
              <p>-{obj.discount}%</p>
            </div>
            <div className="card_info">
              <h1>{obj.name}</h1>
              <p>{obj.desc}</p>
              <div className="card_info_price">
                <p className="final_price">
                  Rp {obj.price * (1 - obj.discount / 100)}
                </p>
                <p className="full_price">Rp {obj.price}</p>
              </div>
            </div>
          </div>
        );
      }
    } else if (obj.status == "new") {
      return (
        <div className="card">
          <img src={obj.src} />
          <div className="new">
            <p>New</p>
          </div>
          <div className="card_info">
            <h1>{obj.name}</h1>
            <p>{obj.desc}</p>
            <div className="card_info_price">
              <p className="final_price">
                Rp {obj.price * (1 - obj.discount / 100)}
              </p>
              <p className="full_price"></p>
            </div>
          </div>
        </div>
      );
    }
  });
}
// #1 Write Your Function Component
function App() {
  return (
    <div className="container">
      <ProductCard />
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
