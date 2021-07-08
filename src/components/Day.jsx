import React from 'react';

export const Day = (props) => {
 const {day, pic, minTemp, maxTemp, id, showData, city} = props;

 return (
   <div className='main'>

    <div className='day' onClick={() => showData(id)}>
         <div>{day}</div>
         <div><img src={pic} alt='sun' /></div>
     <div className='flex'>
         <div>{city}</div>
         <div>{minTemp} &deg; </div>
         <div>{maxTemp} &deg; </div>
     </div>
    </div>
   </div>
 )
}