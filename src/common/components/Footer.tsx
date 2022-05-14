import Space from "../../assets/images/photos/VoieLactee2.webp"
import Button from "../components/Buttons/EnSavoirPlus"

const Footer = () =>{


    return(
        <div className="container-footer">
            <div className="left-part">
                <div className="planet">
                    <p>21 PLANETS</p>
                </div>
                <div className="description">
                    <p>A propos du site</p>
                    <p>Prêt à acheter</p>
                    <p>La première plateforme marchande de planètes au monde, crée pour satisfaire les passionés, les curieux et ceux qui voient en grand... </p>
                    <Button text="En savoir plus"/>

                </div>
            </div>
            <div className="right-part">
                <div className="names">
                    <p><span>Daryl Caruso</span>Dorian Gauron</p>
                </div>
                <img src={Space} alt=""/>
                <p>© 2021 — 2022 Privacy — Terms</p>
            </div>
        </div>
    )
}

export default Footer