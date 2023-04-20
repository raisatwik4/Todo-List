import React from "react";
import { useState } from "react";
import './App.css'
const App=()=>{
    const [inputlist,setinputlist]=useState("");
    const [item,setitem]=useState([]);
    const mode=(e)=>{
         setinputlist(e.target.value);
    };
  
    const additem=()=>{
        if(inputlist.trim() !== '') {
            const newList = item.concat(inputlist);
            setitem(newList);
            setinputlist("")
        }
    };
    const deleteitem=(id)=>{
       
        return setitem(item.filter((item,index)=>{
                return index!==id;
            })
        )
    }
    const Handle = event => {
       if (event.key === 'Enter') {
        
      
          setitem((olditem)=>{
            return [...olditem,inputlist]
          });
          setinputlist(" ");
        
          
        }
      };
      const handleSubmit = event => {
        event.preventDefault();
       
        if (inputlist.trim() !== '') {
         
          }
      };
    return(
       
        <>
          <div className="main">
          
            <div className="card">
                
                <h1>ToDo List</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                <input type="text" value={inputlist} placeholder="Add item" onChange={event => setinputlist(event.target.value)} />
                <button className="btn" onClick={additem} >+</button>
                </form>
               

                <ol>
                   {item.map((itemval,index)=>{
                        return(
                            <>
                            <div className="todo">
                                <li className="list">{itemval}</li>
                                <i className="fa fa-remove item" onClick={()=>deleteitem(index)}></i>
                            </div>
                             </>
                        );
                    })}
                </ol>
            </div>
          </div>
        </>
    );   
};

export default App;


// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);

//   const handleAddItem = () => {
//     if (inputList.trim() !== "") {
//       const newItem = {
//         id: Math.random(),
//         text: inputList,
//         completed: false
//       };
//       setItems([...items, newItem]);
//       setInputList("");
//     }
//   };

//   const handleDeleteItem = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     setItems(updatedItems);
//   };

//   const handleToggleComplete = (id) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, completed: !item.completed };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleAddItem();
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Todo List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           className="input"
//           placeholder="What do you need to do?"
//           value={inputList}
//           onChange={(e) => setInputList(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <button className="button" onClick={handleAddItem}>
//           Add
//         </button>
//       </div>
//       <ul className="list">
//         {items.map((item) => (
//           <li key={item.id} className={`item ${item.completed ? "completed" : ""}`}>
//             <span onClick={() => handleToggleComplete(item.id)} className="checkbox">
//               {item.completed && <i className="fas fa-check"></i>}
//             </span>
//             <span className="text">{item.text}</span>
//             <button className="delete" onClick={() => handleDeleteItem(item.id)}>
//               <i className="fas fa-trash-alt"></i>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
