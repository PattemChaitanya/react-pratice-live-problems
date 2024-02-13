import { debounce } from 'lodash';
import React, { useState } from 'react'

const DebounceCheck = () => {
  const [value, setValue] = useState("");
//   const debounce = (func, wait) => {
//   let timeout;

//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const debounceValue = debounce(handleChange, 500);
  
  return (
    <div>
      <input onChange={debounceValue} />
      <br />
      value: {value}
    </div>
  )
}

export default DebounceCheck