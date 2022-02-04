import {User } from "../../assets"
import StyledHeader from "./styleHeader"


const Header = () =>{
    return(
        <StyledHeader>
            
            <div>
                <nav>
                    <ul>
                        <li>TRIPS</li>
                        <li>RECENTLY VIEWED</li>
                        <li>BOOKINGS</li>
                    </ul>
                </nav>
                <div>
                    <img src={User} alt='User Avatar'/>
                </div>
            </div>

       </StyledHeader>
    )
}

export default Header