import React, {useRef, useEffect,useState} from 'react';
import FixedImageContainer from 'abstract/ui/FixedImage/FixedImageContainer'
import './style.css';


export default function About(){
	return (
	<div className='about'>
		<FixedImageContainer url="./static/img/drums.png" >
			<div className='about-contents'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Lectus nulla at volutpat diam. Nec nam aliquam sem et tortor consequat id porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Lacus luctus accumsan tortor posuere ac ut. Risus nullam eget felis eget nunc lobortis. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Magna eget est lorem ipsum dolor sit amet. Nisi porta lorem mollis aliquam ut porttitor leo. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Malesuada proin libero nunc consequat. In mollis nunc sed id semper. Porta non pulvinar neque laoreet. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Aliquam sem fringilla ut morbi tincidunt augue.
				</p>
				<p>
					Imperdiet massa tincidunt nunc pulvinar sapien et. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Nisl vel pretium lectus quam id. Sed faucibus turpis in eu mi bibendum neque. Augue ut lectus arcu bibendum at varius vel pharetra. Sapien eget mi proin sed. Ut tristique et egestas quis ipsum suspendisse. Aliquet eget sit amet tellus cras. Purus semper eget duis at tellus at. Lectus proin nibh nisl condimentum id venenatis a condimentum.
				</p>
			</div>
		</FixedImageContainer>
	</div>
	)
}





