import React, { useState } from 'react';

export const CitySelect = (props) => {
  const {setCity} = props;

  const [thisCity, setThisCity] = useState('');
  
  const handleClick = () => {
    setCity(thisCity || 'Moscow');
  }

  const handleChange = (event) => {
    setThisCity(event.target.value);
  }

  return (
    <div>
      <input type='text' name='city' value={thisCity} onChange={(event) => handleChange(event)} />
      <button onClick={handleClick}>Select city</button>
    </div>
  )
}

export default CitySelect;