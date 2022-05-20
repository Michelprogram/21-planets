import React, { useState } from 'react';
import LargeChoix from '../common/components/LargeChoix';
import PretAchatPlanetes2 from '../common/components/PretAchatPlanetes2';
import PrixAttractifs from '../common/components/PrixAttractifs';

const About = () => {
    return (
        <div>
            <LargeChoix className='about-large-choix'/>
            <PrixAttractifs className='about-prix-attractif'/>
            <PretAchatPlanetes2 className='about-pret-achat'/>
        </div>
    );
};

export default About;