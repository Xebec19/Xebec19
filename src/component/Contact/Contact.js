				import React from 'react';
				import './Contact.css';
				import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
				
				const Contact =() => {
				return            (
				<div id="contact" className="contact">
				
				<div> 
				<ul id="logos">    {/*logos id to style logos*/}
				<li><a href="https://www.linkedin.com/in/rohan-kumar-thakur-ba6373194" target="_blank" rel="noreferrer" title="Linkedin"><FontAwesomeIcon className="dim" icon={['fab','linkedin']} size="3x" /></a></li>  {/*linked logo and logo*/}
				<li><a href="https://twitter.com/tweets_thakur" target="_blank" rel="noreferrer" title="Twitter"><FontAwesomeIcon className="dim" icon={['fab','twitter']} size="3x" /></a></li>  {/*twitter logo and link*/}
				<li><a href="https://github.com/Xebec19" target="_blank" rel="noreferrer" title="GitHub"><FontAwesomeIcon className="dim" icon={['fab','github']} size="3x" /></a></li>  {/*github logo and link*/}
				<li><a href="mailto:rohant946@gmail.com" target="_self" rel="noreferrer" title="Email"><FontAwesomeIcon className="dim" icon="envelope" size="3x" /></a></li>  {/*mail logo and link*/}
				</ul>
				</div>
				
				</div>
				);
				}
				export default Contact;