import image from '../assets/airbnb-logo.png';

export default function Navbar(){
    return (
        <nav>
            <img className='logo' src={image} alt="error 404" />
        </nav>   
    )
}