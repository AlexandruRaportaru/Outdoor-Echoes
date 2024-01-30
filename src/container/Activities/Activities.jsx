import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../constants';

import './Activities.css';

const Activities = () => (
  <div className='relative text-center py-12 px-6 app__activities'>
    <h1 className='text-left italic mb-4 title'>Our activities</h1>
    
    <div className='app__activities-cards flex justify-center items-center'>
      {data.activitiesCards.map(activity => 
        <div key={activity.cardTitle} className={`relative w-full m-2.5 app__activities-cards_content ${activity.cardClass}`}>
          <img 
            src={activity.cardActivity} 
            alt={activity.cardName} 
            style={{height: `${activity.cardHeight}px`}}
            className='w-full object-cover'
          />
          <div className='h-full top-0 z-10 opacity-40 purple__bg'></div>
          <div className='w-full h-full absolute top-0 z-20 flex flex-col justify-evenly items-center'>
            <h1 className='text-white p__headtext'>{activity.cardTitle}</h1>
            <Link to={`/products/activity_${activity.path}`} className='custom__button'>Descoperă</Link>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Activities;