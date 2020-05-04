import React, { useState, useCallback } from 'react';
import './App.scss';
import Portfolio, { IPortfolio } from './components/resume/portfolio/portfolio';
import CustomModal from './components/common/CustomModal';
const portfolioProps :IPortfolio = {
  name: 'Kakarot Goku',
  address: '439 East District',
  city: 'Village Hidden in the leaf',
  state: 'VA',
  zip: '22201',
  email: 'kakarot@supersaiyan.com',
  phone: '222-222-2222',
  projects: [
    {
      startDate: '01/02/1989',
      endDate: '01/03/2012',
      title: "Dragon Ball",
      descriptions: [
        "Trained under grand father Gohan",
        "Collected all the Dragon Balls to summon Gohan",
        "Defeated demon king Picolo",
        "Married Chichi",
        "Named the son after grandfatather"
      ]
    },
    {
      title: "Dragon Ball Z",
      descriptions: [
        "Defeated Raditz, who also happens to be a brother",
        "Sacrificed myself so that Picolo could defeat Raditz and his minions",
        "Trained under king kai and bobo",
        "Learned Kaioken technique",
        "Defated Napa and Vegeta",
        "Spared Vegita so that we could fight again in the future"
      ]
    },
    {
      title: "Dragon Ball Super",
      startDate: '12/12/2012',
      endDate: '01/20/2020',
      descriptions: [
        "Defeated Raditz, who also happens to be a brother",
        "Sacrificed myself so that Picolo could defeat Raditz and his minions",
        "Trained under king kai and bobo",
        "Learned Kaioken technique",
        "Defated Napa and Vegeta",
        "Spared Vegita so that we could fight again in the future"
      ]
    }
  ]
}
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  // Creates a call back function using useCallback hook
  const callbackFunction = useCallback((updatedVal) => {
    setIsModalOpen(updatedVal);
    return isModalOpen;
  }, [isModalOpen]);
  return (
    <div className="App">
      {isModalOpen && <CustomModal title="Welcome" isModalOpen={true} callback={callbackFunction}>
        <div>
          This is prototype for resume creator. The initial page only includes the ability to update the contents locally.
           The data you enter will not be stored anywhere. The data will only be active until your current session is not closed.
        </div>
      </CustomModal>}
      <Portfolio {...portfolioProps}></Portfolio>
    </div>
  );
}

export default App;
