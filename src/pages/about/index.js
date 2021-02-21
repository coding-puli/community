import React, {useRef, useEffect,useState} from 'react';
import FixedImageContainer from 'abstract/ui/FixedImage/FixedImageContainer'
import './style.css';
import {paragraphs, list, teamData} from './content';
import ProfileCard from 'components/ProfileCard';

export default function About(){
  const paragraphsUI = paragraphs.map((para, index)=>{
    return (
      <p key={index}>{para}</p>
    )
  });

  const listUI = list.map((listItem, index)=>{
    return (
    <li key={index}>{listItem}</li>
    )
  });

  const teamUI = teamData.map((profile, index)=>{
    return <ProfileCard key={index} {...profile}/>
  });

	return (
	<div className='about'>
		<FixedImageContainer url="./static/img/drums.png" >
			<div className='about-contents'>
        {paragraphsUI}
        <ul>
          {listUI}
        </ul>
        <div className='team'>
          <h2>OUR TEAM</h2>
          <div className='team-container'>
          {teamUI}
          </div>
        </div>
			</div>
		</FixedImageContainer>
	</div>
	)
}





