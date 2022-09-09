import React from 'react';
import { hikingVideo } from '../../constants';

import './Intro.css';

const Intro = () => {
  return (
    <div className='app__video'>
      <video src={hikingVideo} type='video/mp4' controls={false} loop muted autoPlay playsInline/>
      <div className='app__video-overlay flex__center'>
        <p className='app__video-overlay_text flex__center'>“The hardest mountain to climb, is the one within” — J. Lynn</p>
      </div>
    </div>
  )
};

export default Intro;
