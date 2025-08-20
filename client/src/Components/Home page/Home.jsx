import React from 'react';
import HeroSlider from './HeroSlider';
import QuickAction from './QuickAction';
import SubInstitutes from './SubInstitutes';
import EventsNews from './EventsNews.jsx';
import Research from './Research.jsx';
import FacilityBooking from './FacilityBooking.jsx';
import OnlinePayments from './OnlinePayments.jsx';


export default function Home() {
    return (
        <div>
            <HeroSlider />
            <QuickAction />
            <SubInstitutes/>
           <EventsNews/>
           <Research/>
           <FacilityBooking/>
           <OnlinePayments/>
           

        </div>
    );
}
