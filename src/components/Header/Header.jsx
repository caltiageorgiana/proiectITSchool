import './Header.css';
import { Link } from 'react-router-dom';



function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Link to='/'> <img src="/img/itschool-logo.png" alt="logo" /> </Link>

            </div>
            <div className="navigation-container">
                <div className="navigation">
                <ul>
                        <li>
                            <Link to='/tesla' style={{ textDecoration: 'none', color:'color(srgb 0.92 0.92 0.92)' }}>TESLA</Link>
                        </li>
                        <li>
                            <Link to='/apple' style={{ textDecoration: 'none', color:'color(srgb 0.92 0.92 0.92)' }}>APPLE</Link>
                        </li>
                        <li>
                            <Link to='/amazon' style={{ textDecoration: 'none', color:'color(srgb 0.92 0.92 0.92)' }}>AMAZON</Link>
                        </li>
                        <li>
                            <Link to='/favorite' style={{ textDecoration: 'none', color:'color(srgb 0.92 0.92 0.92)' }}>FAVORITE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;