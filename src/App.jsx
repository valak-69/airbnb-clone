import React from 'react';
import Mid from './components/mid';
import Navbar from "./components/navbar";
import Card from './components/card';
import data from './components/data';
// import image1 from './assets/dp.png';

export default function App(){
    const elements = data.map(cardelement => {
        return <Card 
            key={cardelement.id}
            element={cardelement}
            />
    })
    return(
        <div>
            <Navbar />
            <Mid />
            <div className='card-container'>
                {elements}
            </div>
               
        </div>
    )
}