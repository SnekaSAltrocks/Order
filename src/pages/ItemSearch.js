import React from 'react'

const ItemSearch = ({itemSearch,setItemSearch}) => {
  return (
   <form onSubmit={(e)=>{e.preventDefault()}}>
    <input type='text'
    value={itemSearch}
    onChange={(e)=>{setItemSearch(e.target.value);
    }
  }
    />
   </form>
  )
}

export default ItemSearch