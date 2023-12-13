import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';



function App(){
  const [items, setItems]=useState(
    [
      {
        id:1,
        checked:true,
        item:"Task 1"
      },
      {
        id:2,
        checked:false,
        item:"Task 2"
      },
      {
        id:3,
        checked:false,
        item:"Task 3"
      }
    ]
  )

  const handleCheck =(id)=>{
    const listItems= items.map((item)=>item.id===id ? {...item, checked:! item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
  const handleDelete=(id)=>{
    const listDelete= items.filter((item)=>item.id!==id)
    setItems(listDelete)
    localStorage.setItem("todo_list",JSON.stringify(listDelete))
  }

  return (

    <div className="App">
       <Header title="REACT JS"/>
       <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
       <Footer 
       length={items.length}/>
    </div>

  )
  }

export default App;
