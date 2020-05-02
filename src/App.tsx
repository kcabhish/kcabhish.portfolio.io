import React from 'react';
import './App.scss';
import Portfolio, { IPortfolio } from './components/portfolio/portfolio';

const portfolioProps :IPortfolio = {
  name: 'Kakarot Goku',
  address: '439 East District',
  city: 'Village Hidden In The Leaf',
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
    }
  ]
}
function App() {
  return (
    <div className="App">
      <Portfolio {...portfolioProps}></Portfolio>
    </div>
  );
}

export default App;
