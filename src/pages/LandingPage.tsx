import React, { useContext } from 'react';
import ButtonViolet from '../common/components/ButtonViolet';
import Header from "../common/components/Header"
import Title from "../common/components/Title"

const LandingPage = () => {
    return (
        <div>
                <Header />
                <Title />
            <ButtonViolet text="See More" link="/login"/>
        </div>
    );
};

export default LandingPage;