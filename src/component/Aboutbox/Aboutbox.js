		import React from 'react';
		import './Aboutbox.css';
		import photo from './photo.png';  /*import photo*/
		
		const Aboutbox =() => {
		return            (
		<div className="card aboutbox dim" >
		<img className="imageLeft" src={photo} alt='Rohan' />	{/*my photo imported from ./photo.png as photo */}
		<div className="contentRight">
		<h3>About me</h3>
		<p>I am a web developer based in Delhi, India. I use <strong>ReactJS</strong> for front-end, <strong>NodeJS</strong> for back-end and <strong>PostgreSQL</strong> for database management.</p>
		</div>
		</div>  /*aboutbox ends here*/
		);
		}
		export default Aboutbox;