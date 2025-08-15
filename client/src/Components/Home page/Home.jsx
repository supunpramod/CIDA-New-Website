import React from 'react';
import HeroSlider from './HeroSlider';
import QuickAction from './QuickAction';
import SubInstitutes from './SubInstitutes';
import EventsNews from './EventsNews.jsx';

export default function Home() {
    return (
        <div>
            <HeroSlider />
            <QuickAction />
            <SubInstitutes/>
           <EventsNews/>

        </div>
    );
}
