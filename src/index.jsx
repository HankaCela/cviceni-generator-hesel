import { render } from '@czechitas/render';
import './global.css';
import './style.css';

import WorkshopIntro from './components/WorkshopIntro.jsx';
import Instructor from './components/Instructor.jsx';
import Venue from './components/Venue.jsx';

const url = 'http://localhost:4000/api/workshops/0'
const response = await fetch(url)
const workshop = await response.json()

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro 
      title={workshop.data.title} 
      description={workshop.data.description}
      intro={workshop.data.intro}
    />
    <Instructor {...workshop.data.instructor} />
    <Venue {...workshop.data.venue} />
  </div>
);
