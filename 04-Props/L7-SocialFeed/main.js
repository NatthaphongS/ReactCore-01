const postList = [
  { message: "Happy new year", author: "John", date: "1/1/2021 00.01AM" },
  { message: "Programing is fun", author: "Jack", date: "30/6/2021 10.23AM" },
  { message: "Oh Amazing !!!", author: "Sarah", date: "23/7/2021 08.17PM" },
];

function App() {
  return (
    <div className="container">
      {postList.map((obj) => {
        return (
          <div className="messagebox">
            <p className="messagebox_message">{obj.message}</p>
            <div className="messagebox_infobox">
              <p>Author: {obj.author}</p>
              <p>{obj.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// ################# พี่ ว๊ ####################
/*
#1 รับ Props
// function Card(props) {
//     return (
//         <div className='card'>
//             <div>{props.text}</div>
//             <div className='card__footer'>
//                 <p>Author :{props.author} </p>
//                 <p>{props.date}</p>
//             </div>
//         </div>
//     );
// }

// #2 รับ Props แล้วมา Destructure
// function Card(props) {
//     const { text, author, date } = props;

//     // const text = props.text
//     // const author = props.author
//     // const date = props.date
//     return (
//         <div className='card'>
//             <div>{text}</div>
//             <div className='card__footer'>
//                 <p>Author :{author} </p>
//                 <p>{date}</p>
//             </div>
//         </div>
//     );
// }

// #3
function Card({ text, author, date }) {
    return (
        <div className='card'>
            <div>{text}</div>
            <div className='card__footer'>
                <p>Author :{author} </p>
                <p>{date}</p>
            </div>
        </div>
    );
}
*/
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
