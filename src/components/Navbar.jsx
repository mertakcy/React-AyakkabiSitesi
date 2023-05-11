import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';

const Navbar = () => {

  const {loginBilgi, signBilgi} = useContext(GlobalContext)

  return (
    <div className="navbar">
        <div>
          <NavLink onClick={() => {loginBilgi(''),signBilgi('')}} id="exit" to='/'>Çıkış</NavLink>
          <NavLink to='/products'>Ürünlerimiz</NavLink>
        </div>
        {
          signBilgi.kullanıcıAdı &&
          <p id="hosGeldi">Hoşgeldiniz {signBilgi.kullanıcıAdı}</p>
        }
        
          <NavLink to='/basket'><i className="fa-solid fa-basket-shopping"></i></NavLink>
        
    </div>
  )
};

export default Navbar;
