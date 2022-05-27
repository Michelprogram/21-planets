import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonBlue = ({link, text, submit, action} : IButton) =>{
    return(
        <div>
        { submit ? <button type="submit" formAction={link} className='button_blue'>{text}</button> :
            <Link to={link} onClick={action ? action : ""}>
            <li> <button type="button" className='button_blue'>{text}</button></li>    
            </Link>
        }
        </div>
    )
}

export default ButtonBlue