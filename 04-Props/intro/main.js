function MyComponent(props) {
  return <h4>Hello {props.text}</h4>;
}

function Button({ props }) {
  return <button className={`${props.className}`}>{props.text}</button>;
}
// JSX : <h1 className="red" role='button'>Header</h1>
// const props = {className:'red',role:'button'}
// React : React.createElement('h1',props,'Header)

// ## ส่ง Attribute ให้ function Component
// JSX : <MyComponent text='React' className='red'/>
// const props ={text:'React, className:'red'}
// props คือ objectที่เก็บ attribute ทั้งหมด ในรูปของ key:value

// 0 attribute <MyComponent /> == MyComponent()
// 1 attribute <MyComponent text='React' /> == MyComponent(props)
// 2 attribute <MyComponent text='React' className='red'/> == MyComponent(props)

function App() {
  return (
    <div>
      <h1 className="red">Header</h1>
      <MyComponent />
      <MyComponent text="React" />
      {/* MyComponent({text:'React'}) */}
      <MyComponent text="CSS" />
      {/* MyComponent({text:'CSS'}) */}
      <MyComponent className="red" text="HTML" />
      {/* MyComponent({text:'React' className='red'}) */}
      <MyComponent text="Anything" />
      <Button text="Come on" />
      <Button text="stay!" className="btn" />
      <Button text="Go away" className="btn-black" />
    </div>
  );
}
// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
