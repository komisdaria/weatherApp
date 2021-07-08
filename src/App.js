
import { useState } from 'react';
import './App.css';
import { Day } from './components/Day';
import DayInfo from './components/DayInfo';
import CitySelect from './components/CitySelect'

const infoWeather = [
  {
    day: 'Monday',
    pic: 'https://w7.pngwing.com/pngs/823/891/png-transparent-ip-address-darts-ip-information-company-internet-protocol-cloud-miscellaneous-company-service.png',
    minTemp: '+12',
    maxTemp: '+19',
    id: '1',
  },
  {
    day: 'Tuesday',
    pic: 'https://www.iguides.ru/upload/main/7e6/7e6e9d65c2711bc80528d9bf8248fa5b.jpg',
    minTemp: '+17',
    maxTemp: '+25',
    id: '2',
  },
  {
    day: 'Wensday',
    pic: 'https://w7.pngwing.com/pngs/823/891/png-transparent-ip-address-darts-ip-information-company-internet-protocol-cloud-miscellaneous-company-service.png',
    minTemp: '+15',
    maxTemp: '+21',
    id: '3',
  },
  {
    day: 'Thursday',
    pic: 'https://e7.pngegg.com/pngimages/870/831/png-clipart-computer-icons-rain-cloud-rain-text-cloud.png',
    minTemp: '+26',
    maxTemp: '+32',
    id: '4',
  },
  {
    day: 'Friday',
    pic: 'https://w7.pngwing.com/pngs/823/891/png-transparent-ip-address-darts-ip-information-company-internet-protocol-cloud-miscellaneous-company-service.png',
    minTemp: '+30',
    maxTemp: '+33',
    id: '5',
  },

]

function App() {
  const [day, setDay] = useState(null);
  const [city, setCity] = useState('Moscow ');

  const showData = (id) => {
    console.log(id);
    const currDay = infoWeather.find((el) => el.id === id);
    setDay(currDay);
  }

  return (
    <div className="App">
      <div className='city'>
        <CitySelect setCity={setCity} />
      </div>
      <div>
      {infoWeather.map((el) => (
        <Day {...el} key={el.id} showData={showData} city={city} />
      ))}
      </div>
      {day && <DayInfo {...day} city={city} />}
    </div>
  );
}

export default App;
