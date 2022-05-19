import React, { useContext } from 'react';
import ButtonViolet from '../common/components/Button/ButtonViolet';
import Header from "../common/components/Header"
import Footer from "../common/components/Footer"
import ParcourezUnivers from '../common/components/ParcourezUnivers';
import NouvelleCollection from '../common/components/NouvelleCollection';

const LandingPage = () => {
    return (
        <div>
            <ParcourezUnivers className='landing-parcourez'/>
            <NouvelleCollection className='landing-collection'/>
        </div>
    );
};

export default LandingPage;