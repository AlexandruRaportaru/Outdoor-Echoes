import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../constants';

import './Activities.css';

const Activities = () => (
  <div className='app__activities'>
    <h1 className='app__activities-title title'>Our activities</h1>
    <div className='app__activities-cards'>
      {data.activitiesCards.map(activity => 
        <div key={activity.cardTitle} className={`app__activities-cards_content ${activity.cardClass}`}>
          <img 
            src={activity.cardActivity} 
            alt={activity.cardName} 
            style={{height: `${activity.cardHeight}px`}}
          />
          <div className='app__activities-cards_content-background purple__bg'></div>
          <div className='app__activities-cards_content-text'>
            <h1 className='p__headtext'>{activity.cardTitle}</h1>
            <Link to={`/products/activity_${activity.path}`} className='custom__button'>Shop Now</Link>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Activities;
