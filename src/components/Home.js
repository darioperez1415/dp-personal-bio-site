import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import '../styles/globals/timeline.scss';
import { ReactComponent as WorkIcon } from '../timeline/work.svg';
import { ReactComponent as SchoolIcon } from '../timeline/school.svg';

import timelineElements from '../timeline/timelineElements';

import 'react-vertical-timeline-component/style.min.css';

function Home() {
  const workIconStyles = { background: '#06D6A0' };
  const schoolIconStyles = { background: '#f9c74f' };

  return (
    <div>
      <h1 className="title">The Journey So Far</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === 'work';
          const showButton = element.buttonText !== undefined
           && element.buttonText !== null
           && element.buttonText !== '';

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? 'workButton' : 'schoolButton'
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Home;
