import React from 'react';

export default function Logo(props){
  const {url} = props;

  const containerStyle = {
    position: 'relative',
    top: '16px',
    marginLeft: '16px'
  };

  return (
  <div style={containerStyle}>
    <div className='logo'>
      <img src={url}/>
    </div>
  </div>
  )
}