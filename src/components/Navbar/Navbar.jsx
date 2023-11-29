import 'bulma/css/bulma.css';
import style from './navbar.module.css';
import {useState} from "react";

const Navbar = () => {
    
    const [isActive, setIsActive] = useState(false);
    
    const onMenuClickEvent = () => {
        setIsActive(prevState => !prevState)
    }
    
    const menuStyle = isActive ? "navbar-burger is-active": "navbar-burger";
    
    return <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" onClick={onMenuClickEvent} className={menuStyle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span style={{color: "#fff"}} aria-hidden="true"></span>
                    <span style={{color: "#fff"}} aria-hidden="true"></span>
                    <span style={{color: "#fff"}} aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className={style.container}>
                    <a className={style.link}>Inicio</a>
                    <a className={style.link}>Contacto</a>
                </div>
            </div>
            
            {isActive ? <div className={style.container_mobile}>
                <div className={style.container_mobile_link}>
                    <a className={style.link}>Inicio</a>
                </div>
                <div className={style.container_mobile_link}>
                    <a className={style.link}>Contacto</a>
                </div>
        </div> : null}
        </nav>
    </>
};

export default Navbar;