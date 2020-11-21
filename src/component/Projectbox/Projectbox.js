				import React from 'react';
				import './Projectbox.css';
				import photo1 from './robo.png';  /*Import photo for robofriends*/
				import photo2 from './rajni.png';  /*Import photo for rajni jokes*/
				import photo3 from './backgroundG.png';  /*Import photo for background Generator*/
				import photo4 from './todo.png';  /*Import photo for shopping list*/
				
				const Projectbox =() => {
				return            (
				<div>
				
				<h1>Projects</h1>  {/*Headline*/}
				
				{/*Card for Robofriends*/}
				<div className="card aboutbox grow">
				<img src={photo1} className="imageLeft" alt="robofriends" />
				
				<div className="contentRight">
				<h3>Robofriends</h3>
				<p>It is a single page React application that sorts the contact list according to the input given by the user.</p><br/>
				<a href="https://xebec19.github.io/robofriends/" target="_blank" className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-pink" rel="noreferrer">See Live</a>
				</div>
				
				</div>
				
				{/*Card for Rajni Jokes*/}
				<div className="card aboutbox grow">
				<img src={photo2} className="imageLeft" alt="Rajni Jokes" />
				
				<div className="contentRight">
				<h3>Rajni Jokes</h3>
				<p>It is a single page React application that tells jokes on Indian Superstar Rajni Kant.</p><br/>
				<a href="https://xebec19.github.io/Rajni-Jokes/" className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-pink" target="_blank" rel="noreferrer">See Live</a>
				</div>
				
				</div>
				
				{/*Card for Shopping list*/}
				<div className="card aboutbox grow">
				<img src={photo4} className="imageLeft" alt="Shopping List" />
				
				<div className="contentRight">
				<h3>Shopping List</h3>
				<p>It allows the user to append or delete items in a list.</p><br/>
				<a href="https://xebec19.github.io/Shopping-List/" target="_blank" className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-pink" rel="noreferrer">See Live</a>
				</div>
				
				</div>
				
				{/*Card for Background Generator*/}
				<div className="card aboutbox grow">
				<img src={photo3} className="imageLeft" alt="Background Generator" />
				
				<div className="contentRight">
				<h3>Background Generator</h3>
				<p>It allows the user to set the background gradient of the web page.</p><br/>
				<a href="https://xebec19.github.io/BackgroundGenerator/" target="_blank" className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-pink" rel="noreferrer">See Live</a>
				</div>
				
				</div>
				
				</div>
				);
				}
				export default Projectbox;