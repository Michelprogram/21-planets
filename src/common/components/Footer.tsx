import Space from "../../assets/images/photos/VoieLactee2.webp"
import ButtonXL from "./Button/ButtonXL"

const Footer = () =>{


    return(
        <div className="container-footer">
            <div className="left-part">
                <div className="description">
                    <div className="planet">
                        <p>21 PLANETS</p>
                    </div>
                    <div className="buy">
                        <p>Prêt à acheter</p>
                        <p>La première plateforme marchande de planètes au monde, crée pour satisfaire les passionés, les curieux et ceux qui voient en grand... </p>
                        <ButtonXL link="/support" text="En savoir plus"/>
                    </div>
                </div>
            </div>
            <div className="middle-hr"></div>
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