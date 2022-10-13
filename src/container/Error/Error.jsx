import React from 'react';
import { Link } from "react-router-dom";
import { images } from '../../constants';

import './Error.css';
 
const Error = () => {
  return (
    <div className='app__error'>
        <div className='app__error-title'>
            <h1 className='p__logo'>
                <Link className='link' to={`/`} >
                    Home
                </Link>
            </h1>
        </div>
        <div className='app__error-content flex__center'>
            <img src={images.exclamation} alt='exclamation' className='exclamation'/>
            <div>
                <img src={images.error} alt='error' className='error'/>
                <h1 className='p__logo'>Oops! Something went Wrong. Try Again</h1>
            </div>
        </div>
    </div>
  )
}

export default Error