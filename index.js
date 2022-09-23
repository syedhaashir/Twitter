import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css'


function Hi(props) {
  return <div className='twitter'>
    <div className='header'>
        <h1>Twitter</h1>
    </div>
  
    <div className='post'>
        <div className='post-header'>
          <img className='profilePhoto' src={props.pfp} alt="Profile Picture"/> 
          <div>
            {props.name}<br/>
            {moment(props.postdate).fromNow()}
          </div>
        </div>
        <div className='post-cap'>
          {props.postcap}
        </div>
        <div className='post-img'>
          <img className='image' src={props.postimg}/>
        </div>
        <div className='post-footer'>
          <img src='' alt='like'/>
          <img src='' alt='comment'/>
          <img src='' alt='share'/>
        </div>

    </div>
    </div>
}

ReactDOM.render(<Hi 
  name="Cristiano Ronaldo"
  pfp="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
  postdate="5-Sep-2022"
  postcap= "It's always good to be with you! 👏🏽 #alwaystogether"
  postimg= "https://pbs.twimg.com/media/Fb5sGlYXEAIMopj?format=jpg&name=medium"  
  />
  
  , document.querySelector('#root'));
