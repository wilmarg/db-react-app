import React from 'react';
import { Characters } from '../models/Characters';
import Card from '../components/Card';


const MenScreen = () => {

  const Men = Characters.filter(character => character.type === "h");

  return (
    <>
      <div className='container mt-3'>
        <h1 className='my-3'>Men Screen</h1>
        <hr/>
        <div className='row'>
          {
          Men.map((men) => (< Card key={men.id} {...men} />))
          }
        </div>
        

      </div>   
          
    </>
  );
};

export default MenScreen;