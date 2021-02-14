import React from 'react';
import NavBar from 'abstract/ui/navbar';
import Logo from './logo';

export default function Header(props){
  const {links, logoUrl} = props;


  const style = {
    display: 'flex'
  };

  const wordStyle = {
    width: "50px"
  }

  return (
  <div className='header'>
    <div style={style}>
      <Logo url={logoUrl}/>
    </div>
    <div>
      <h2 style={wordStyle}>Afro Caribbean Community Association</h2>
    </div>
    <NavBar links={links}/>
  </div>
  )
}