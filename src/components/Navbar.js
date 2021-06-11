import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                    MC <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME(主页)
                        </Link>
                    </li>
                    <li className='navi-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            PROFESSIONAL(专业技能)
                        </Link>
                    </li>
                    <li className='navi-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            EXPERIENCE(经历)
                        </Link>
                    </li>
                    <li className='navi-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            PORTFOLIO(个人项目)
                        </Link>
                    </li>
                    <li className='navi-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT(联系方式)
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                            SIGN UP(注册)
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

            </div>
         </nav>
        </>
    );
}

export default Navbar
