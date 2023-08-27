const post = [
  { id: 1, message: "Power of god", date: "2023-08-24", name: "Natthaphong" },
  {
    id: 2,
    message: "เข้าทุกคาบ แต่ไม่ทราบอะไรเลย",
    date: "2023-08-23",
    name: "Pete",
  },
];

const postBox = post.map((obj) => {
  return (
    <div className="postcard">
      <p>
        Name: {obj.name} Date-Post: {obj.date}
      </p>
      <h3>{obj.message}</h3>
    </div>
  );
});

function App() {
  return <div className="container">{postBox}</div>;
}

//######################################################
/*
function PostItem(props) {
  // props = { data : postObj }
  // postObj = {id:number, message:string,date:string, author:string}
  return (
      <div>
          <h1>{props.data.message}</h1>
          <p>
              {props.data.author.toUpperCase()} :{props.data.date}
          </p>
      </div>
  );
}
// #2
function PostList() {
  return (
      <div className='container'>
          {posts.map((postObj, index) => (
              <PostItem
                  key={postObj.id}
                  // key={index}
                  data={postObj}
              />
          ))}
      </div>
  );
*/

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
