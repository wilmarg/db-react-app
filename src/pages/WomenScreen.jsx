import React from 'react';
import { Characters } from '../models/Characters';
import Card from '../components/Card';


const WomenScreen = () => {

  const Women = Characters.filter(character => character.type === "m");

  return (
    <>
      <div className='container mt-3'>
        <h1 className='my-3'>Women Screen</h1>
        <hr/>
        <div className='row'>
          {
          Women.map((women) => (< Card key={women.id} {...women} />))
          }
        </div>
        
      </div>          
    </>
  );
};

export default WomenScreen;