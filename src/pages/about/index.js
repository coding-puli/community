import React, {useRef, useEffect,useState} from 'react';
import FixedImageContainer from 'abstract/ui/FixedImage/FixedImageContainer'
import './style.css';
import {teamData} from './content';
import ProfileCard from 'components/ProfileCard';

export default function About(){
  const teamUI = teamData.map((profile, index)=>{
    return <ProfileCard key={index} {...profile}/>
  });

	return (
	<div className='about'>
		<FixedImageContainer url="./static/img/drums.png" >
			<div className='about-contents'>
        <div className='team-container'>
        {teamUI}
        </div>
			</div>
		</FixedImageContainer>
	</div>
	)
}





