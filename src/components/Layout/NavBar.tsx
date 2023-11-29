import Logo from '../../assets/image/logo.png'
import Bar from '../../assets/image/bar.svg'
import Cross from '../../assets/image/cross.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    interface menuListInterface {
        name: string;
        path: string
    }
    const menuList: menuListInterface[] = [
        { name: 'NEWS + FEATURES', path: '#' },
        { name: 'Film', path: '#' },
        { name: 'Series', path: '#' },
        { name: 'Cartoons', path: '#' },
        { name: 'Game', path: '#' },
    ]
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <nav className='main_nav_section container mx-auto'>
                <div className='nav_logo'>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo' />
                    </Link>
                    <button onClick={() => setShowMenu(true)}>
                        <img src={Bar} alt='Bar' />
                    </button>
                </div>
                <ul className={` ${showMenu ? 'active_menu' : 'hide_menu'} main_menu_list`}>
                    <button onClick={() => setShowMenu(false)}>
                        <img src={Cross} alt='Bar' />
                    </button>
                    {menuList.map((item, index) => <li key={index} className='cursor'>{item.name}</li>)}
                </ul>
            </nav>
        </>
    )
}

export default NavBar