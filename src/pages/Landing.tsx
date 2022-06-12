import ParcourezUnivers from '../common/components/ParcourezUnivers';
import NouvelleCollection from '../common/components/NouvelleCollection';
import Citation from '../common/components/Citation';

const LandingPage = () => {
    return (
        <div>
            <ParcourezUnivers className='landing-parcourez'/>
            <Citation auteur="Buzz l'éclair" citation="Vers l'infini et au-delà..."/>
            <NouvelleCollection className='landing-collection'/>
        </div>
    );
};

export default LandingPage;