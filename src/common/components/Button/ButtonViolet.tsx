import {Link} from "react-router-dom";
import IButton from '../../../interfaces/IButton';

const ButtonViolet = ({link, text, className, action} : IButton) =>{
    return(
        <Link to={link} onClick={action ? action : ""}>
            <li> <button type="button" className={'button_purple '+className}>{text}</button></li>    
        </Link>
    )
}

export default ButtonViolet