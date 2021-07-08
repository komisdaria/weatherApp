import React from 'react';

const DayInfo = (props) => {
  const {day, pic, minTemp, maxTemp, city} = props;
  return (
    <div>
      <h4>About this day in {city}</h4>
      <div>{day}</div>
      <div><img src={pic} alt='sun' /></div>
      <div className='flex'>

      <div>{minTemp} &deg;</div>
      <div>{maxTemp} &deg;</div>
      </div>
    </div>
  )
}

export default DayInfo;