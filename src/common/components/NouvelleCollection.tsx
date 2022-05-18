import VaporWave from "../../assets/images/svg/vaporwave.svg"
import Uranus from "../../assets/images/svg/uranus.svg"
import Saturn from "../../assets/images/svg/saturn.svg"
import Neptune from "../../assets/images/svg/neptune.svg"
import setClassName from '../../utils/ClassName';


const NouvelleCollection = ({className = ''}) =>{
    return(
        <div className={setClassName('container-new-collection', className)}>
            <div className="img-part">
                <div className="container-black">
                    <img className="vapowave" src={VaporWave} alt="" />
                    <img className="uranus" src={Uranus} alt="" />
                    <img className="saturn" src={Saturn} alt="" />
                    <img className="neptune" src={Neptune} alt="" />
                </div>
            </div>
            <div className="text-container">
                <p>Notre nouvelle collection ! ! !</p>
                <p>Pour vos yeux ébahi, la nouvelle collection cosmique printemps fais son grand retour. Vous trouverez la magnifique 21 Cygnus F-21 ainsi que la Gazpart - Avenger en édition limitée.</p>
                <p>* Depuis notre nouvelle mise à jour nous acceptons les paiements en cryptommonnaie ₿. Cependant aucun remboursement ne sera possible. </p>
                <div className="auteurs"><div></div><p>Daryl Caruso, Gauron Dorian - Designer & Panda</p></div>
            </div>
        </div>
    )
}

export default NouvelleCollection