import React from 'react';
import Planet from "../../assets/images/photos/planete1.webp"
import Space from "../../assets/images/photos/VoieLactee2.webp"

const PostBottom = () => {
    return (
        <div className='container-post-bottom'>
            <div className="container-vitrine">
                <div className="container-gazeuse">
                    <img src={Planet} className="background-planet"/>
                    <p className='blue-text'>Planète gazeuse</p>
                </div>
                <div className="container-etoiles">
                    <img src={Space} className="background-planet"/>
                    <p className='blue-text'>Etoiles</p>
                    <p className='blue-text'>Les étoiles parmi les étoiles ne donnent que peu de lumière et pas davantage de chaleur.</p>
                </div>
                <div className="container-asteroides">
                    <p>Astéroïdes</p>
                    <p>Trouvez les astéroïdes les plus convoitées de la galaxie.</p>
                    <p>Allez voir &gt;</p>
                </div>
                <div className="container-debris">
                    <p>Débris</p>
                    <p>Passionnez de vaisseau spatial n’attendez plus !</p>
                    <p>Allez voir &gt;</p>
                </div>
            </div>
        </div>
    );
};

export default PostBottom;