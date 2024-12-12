import React, { useRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = ({ item,handleDelete,hadleCheck }) => {

  return (
    <main>
      <ul>
      {Array.isArray(item) && item.length > 0 ? (
      item.map((i, index) => (
    <li key={index}>
      <input
        type="checkbox"
        checked={i.checked}
        readOnly
        onClick={() => hadleCheck(i.id)}
      />
      <label htmlFor={i.item}>{i.item}</label>
      <DeleteIcon onClick={() => handleDelete(i.id)} 

        />
    </li>
  ))
) : (
  <p>No items found</p>
)}

      </ul>
    </main>
  );
};

export default Item;
