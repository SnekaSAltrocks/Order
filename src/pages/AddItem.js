import React, { useRef } from 'react'
import AddIcon from '@mui/icons-material/Add'; 
const AddItem = ({netItem,setNewItem,handleSubmit}) => {
  const inputResf=useRef();

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <input
      type="text"
      placeholder="Enter the item"  
      ref={inputResf}
      value={netItem}
      onChange={(e) => {
      setNewItem(e.target.value);
      }} 
    />
    <button type="submit" onClick={()=>inputResf.current.focus()}>
    <AddIcon />
    </button>
  </form>
  )
}

export default AddItem