import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LABELS } from '../../constants/AppConstants';
import Avatar from '../avatar/avatar';
import Header from '../header/Header';
import './Dashboard-style.css';

/**
 *  Dashboard component
 */
const Dashboard = () => {
  const RenderDashboard = () => {
    const [years, setYearValue] = useState([
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009
    ]);
    return (
      <div className='dashboardComponent'>
        <Avatar />
        <h1>{LABELS.DASHBOARD_HEADER_TEXT}</h1>
        <div className='dashboardComponent__row'>
          {years.map((year, index) => (
            <div className='dashboardComponent__column' key={index}>
              <Link to={`/vehicles/${year}`}>
                <input type='button' value={year} name={index}></input>
              </Link>
            </div>
          ))}
          <div className='dashboardComponent__column'>
            <input
              type='button'
              value={LABELS.DEFAULT}
              name={LABELS.DEFAULT}
            ></input>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      <Header />
      <RenderDashboard />
    </div>
  );
};

export default Dashboard;
