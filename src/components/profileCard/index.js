import React from 'react';
import './style.css';

//https://codepen.io/FrankieDoodie/pen/NOJpVX
export default function ProfileCard(props){

  const {name, title, image, twitter, fb, linkedin} = props;
  return (
    <div className="profile-card">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={image}/>
        </div>
        <div className="team-content">
          <h3 className="name">{name}</h3>
          <h4 className="title">{title}</h4>
        </div>
        <ul className="social">
          <li><a href='#' ><i className="fab fa-facebook-f"></i></a></li>
          <li><a href='#' ><i className="fab fa-twitter"></i></a></li>
          <li><a href='#' > <i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  )

}