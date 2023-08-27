const persons = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
];

function Avatar(props) {
  return (
    <div className="avatar">
      <img className="avatar_image" src={props.source} alt={props.alt}></img>
    </div>
  );
}

// function AvatarGroup() {
//   return (
//     <div className="container">
//       <Avatar
//         source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//         alt="Aya Stark"
//       />
//       <Avatar
//         alt="Tony Stark"
//         source="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//       />
//       <Avatar />
//     </div>
//   );
// }

// const people = ["Arya", "Nerd", "Rob", "John"];
/*
<Avatar alt="Arya" />
<Avatar alt="Nerd" />
<Avatar alt="Rob" />
<Avatar alt="John" />
*/
// MAP name ===> <Avatar/>
// 1st : "Arya" ====> <Avatar alt="Arya" />
// 2nd : "Nerd" ====> <Avatar alt="Nerd" />
// 3rd : "Rob" ====> <Avatar alt="Rob" />
// 4th : "John" ====> <Avatar alt="John" />
// const list = people.map((name) => <Avatar alt={name} />);
// map return new array
/* 
list=[
    <Avatar alt="Arya" />,
    <Avatar alt="Nerd" />,
    <Avatar alt="Rob" />,
    <Avatar alt="John" />
]

*/
// function AvatarGroup() {
//   return (
//     <div className="container">
//       {/* {list} */}
//       {people.map((name) => (
//         <Avatar alt={name} />
//       ))}
//     </div>
//   );
// }

const peopleList = [
  {
    id: 1,
    name: "Arya",
    age: 25,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Nerd",
    age: 35,
    src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Rob",
    age: 45,
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    name: "John",
    age: 55,
    src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
];
function AvatarGroup() {
  return (
    <div className="container">
      {peopleList.map((person) => (
        <Avatar alt={person.name} source={person.src} />
      ))}
    </div>
  );
}
// Array=MAP each Object => Render Avatar =>pass props alt,source

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<AvatarGroup />);
