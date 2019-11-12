import React from 'react';
import '../App.css';
import {ProjectOne} from './projectview';
import { Spring } from 'react-spring/renderprops';





export function Home() {
  return (

    <Spring delay={10} from={{ opacity: 0 }} to={{ opacity: 1 }}>{props =>
      <div className = "Outer" style={props}>
          <div className='Home'>
            <h2 className= "Hey">Hey there!</h2>
            <p> I am a recent Information Science graduate from the University of Maryland, where
            I learned to think like a programmer,
            understand the impacts of technology on society
            and solve problems. I am currently creating
            more depth to my understanding of programming
            by self-studying new programming languages, frameworks and
            developing web applications. I hope to
            expand my craft to empower others with technology.</p>
          <p> Here are my most recent projects.</p>
          </div>
        <ProjectOne/>
      <hr/>
      </div>}
    </Spring>
  );
}
