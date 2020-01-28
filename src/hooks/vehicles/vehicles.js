import React, { useState } from 'react';
import { LABELS } from '../../constants/AppConstants';
import Avatar from '../avatar/avatar';
import Properties from '../properties/Properties';
import './Vehicles-style.css';
import Header from '../header/Header';
import JsonObject from '../../__mocks__/vehicle.data.json';

/**
 *  Render Vehicles Info component
 */
const Vehicles = props => {
  const { match } = props;
  let { year } = match.params;

  const RenderVehicles = props => {
    const { year } = props;
    const [carInfo, setCarInfo] = useState({
      data: JsonObject
    });
    return (
      <div className='vehiclesComponent'>
        <Avatar />
        <h1>{LABELS.VEHICLES_HEADER_TEXT}</h1>
        {Object.keys(carInfo.data).map((object, index) => (
          <div key={index} className='vehiclesComponent__properties'>
            <Properties data={carInfo.data[object]} year={year} />
          </div>
        ))}
        <p className='vehiclesComponent__footer'>
          *Excludes on road and government costs
        </p>
      </div>
    );
  };

  return (
    <div className='container'>
      <Header />
      <RenderVehicles year={year} />
    </div>
  );
};

export default Vehicles;
