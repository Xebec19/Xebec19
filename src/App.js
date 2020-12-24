import React from 'react';
import './App.css';
import 'tachyons';
import 'animate.css';
import Aboutbox from './component/Aboutbox/Aboutbox';  /*Component for about section */
import Contact from './component/Contact/Contact';  /* Component for contact section */
import Projectbox from './component/Projectbox/Projectbox';  /* Component for project section */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';  /* import brands from font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add        (fab,faEnvelope);  /* add brands in the library so I can simply write brand names as string */



class App extends React.Component {
render             (){
return(
<div>
<div className="intro animate__animated animate__fadeInDown">    {/*Intro section to display name and role above about cards*/}
<h1 className="heading">Hi, I am <strong>Rohan Kumar Thakur</strong></h1>
<h1 className="heading">And I am a <strong>Web Developer.</strong></h1>
<nav>
<div> 
<ul id="logos">    {/*logos id to style logos*/}
<li><a href="https://www.linkedin.com/in/rohan-kumar-thakur-ba6373194" target="_blank" rel="noreferrer" title="Linkedin"><FontAwesomeIcon className="dim" icon={['fab','linkedin']} size="2x" /></a></li>  {/*linked logo and logo*/}
<li><a href="https://twitter.com/tweets_thakur" target="_blank" rel="noreferrer" title="Twitter"><FontAwesomeIcon className="dim" icon={['fab','twitter']} size="2x" /></a></li>  {/*twitter logo and link*/}
<li><a href="https://github.com/Xebec19" target="_blank" rel="noreferrer" title="GitHub"><FontAwesomeIcon className="dim" icon={['fab','github']} size="2x" /></a></li>  {/*github logo and link*/}
<li><a href="mailto:rohant946@gmail.com" target="_self" rel="noreferrer" title="Email"><FontAwesomeIcon className="dim" icon="envelope" size="2x" /></a></li>  {/*mail logo and link*/}
</ul>
</div>
</nav>
</div>
<Aboutbox />   {/*Component card for about section*/}
<Projectbox />  {/*Component card for project section*/}
<Contact />  {/*Component card for contact section*/}
</div>
)
}
}
export default App;
