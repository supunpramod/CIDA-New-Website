import React from 'react';
import HeroSlider from './HeroSlider';
import QuickAction from './QuickAction';
import SubInstitutes from './SubInstitutes';
import EventsNews from './EventsNews.jsx';
import Research from './Research.jsx';
import FacilityBooking from './FacilityBooking.jsx';
import OnlinePayments from './OnlinePayments.jsx';
import  AwesomeStatsSection  from './AwesomeStatsSection.jsx';
import Awads from './Awads.jsx';


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
           <Awads/>
           <AwesomeStatsSection/>
           
          
           
           

        </div>
    );
}
