import React, { useState } from "react";

//   // 2 imp -> use only with react obj, always initialize at the top

export const StateWithArray = () => {

    //above function is accessing array using map

    // const [items, setItems] = useState(['apple', 'banana']);

    // return(
    //     <>
    //     {items.map((item) => (
    //         <p>{item}</p>
    //     ))}
    //     </>
    // )






    

// add item using button and input field
const [items, setItems] = useState([]);
const [fruit, setFruit] = useState('')

const addItem = () =>{
    // let newFruit = "tomato"
    // setItems(items.push(newFruit)) // not work because im not pushing nly the newFrruit but the whole function items.push()

    // setItems([...items, newFruit]) //this work --> first use spread operator then set the state

    setItems([...items, fruit]);
    setFruit('') //add tem pe click krne ke baad input field ko empty krne ke liye

}

return(
    <>
    <input type= 'text' value={fruit} placeholder='type fruit' onChange = {(e) => setFruit(e.target.value)} ></input>
    <button onClick={addItem}>Add Item</button>
    {items.map((item) => (
    <div>
        <span>{item}</span>   
        {/* <button>Edit</button> */}
        <button onClick={() => {
            let filteredItems = items.filter((value) => value !== item);
            setItems([...filteredItems]); 
        }}>Delete</button>
    </div>
    ))}
    </>
)









//   const [items, setItems] = useState([]);
//   const [fruit, setFruit] = useState("");

//   // 2 imp -> use only with react obj, always initialize at the top

//   const addItem = () => {
//     setItems([...items, fruit]);
//     setFruit("");
//   };

//   return (
//     <>
//       <input type="text" value={fruit} placeholder={"add fruit"} onChange={(e) => setFruit(e.target.value)}
//       />
//       <button onClick={addItem}>add item</button>
//       {items.map((item) => (
//         <div>
//           <span>{item}</span>
//           <button onClick={() => {
//               let filteredItems = items.filter((value) => value !== item);
//               setItems([...filteredItems]);
//             }}
//           >delete
//           </button>
//         </div>
//       ))}
//     </>
//   );
};