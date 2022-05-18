import React, { useState } from 'react';
import LargeChoix from '../common/components/LargeChoix';
import PretAchatPlanetes2 from '../common/components/PretAchatPlanetes2';
import PrixAttractifs from '../common/components/PrixAttractifs';

const About = () => {
    return (
        <div>
            <LargeChoix className='bloc'/>
            <PrixAttractifs className='bloc'/>
            <PretAchatPlanetes2 className='bloc'/>
            </div>
    );
};

export default About;