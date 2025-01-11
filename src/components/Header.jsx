import {Link} from 'react-router-dom';
import logo from '../assets/BvoltLogo.png'
function Header(){
    return(
        <>
        <header className='header'>
            <h1 className='turret-road-regular'>BridgeVolt Cooperative. E-bikes For All.</h1>
            <div className="logo">
                <Link to='/'><img src={logo} alt="no image yet" /></Link>
            </div>
            <div className='navigation border'>
                <Link to='/About'>About</Link>
                <a href="https://www.paypal.com/donate/?hosted_button_id=UB9PY2F4RXRRA" target='_blank'>Donate</a>
                <Link to='/Support'>Support</Link>
                <Link to='/Visit'>Visit</Link>
            </div>
        </header>
        </>
    )
}
export default Header;