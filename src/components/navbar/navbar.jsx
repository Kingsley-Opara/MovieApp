import netflix from '../../images/netflix.png'
import './navbar.css'
const Navbar = () => {
    return ( 
        <nav className='nav'>
            <div className='nav_container'>
                <img src={netflix} alt="Netflix logo" className='nav_logo' />
                <i class="fa-solid fa-sun-bright toggle"></i>
                <i class="fa-regular fa-sun-bright toggle"></i>
            </div>
        </nav>
     );
}
 
export default Navbar;