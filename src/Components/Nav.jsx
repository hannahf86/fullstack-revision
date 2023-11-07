// REACT
import { useState } from 'react'

// ASSETS
import logo from '../Assets/LOGO.png'

// ICONS
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Nav = () => {

    const styles = {
        container: 'fixed w-full h-[6em] flex justify-between items-center px-4 bg-[#F2C572]',
        item: 'text-[#4A4873] flex items-center px-6',
        desktopMenu: 'hidden md:flex',
        hamburger: 'md:hidden z-10 text-[#4A4873] m-2 cursor-pointer',
        mobileMenu: 'absolute top-0 left-0 w-full h-screen bg-[#F2C572] flex flex-col justify-center items-center',
        mobileItem: 'text-[#4A4873] py-4 font-bold text-xl cursor-pointer',
    }


    {/* MENU FUNCTION */ }
    const [mobileNav, setMobileNav] = useState(false);
    const handleMobileNav = () => setMobileNav(!mobileNav);

    return (
        <>
            <div className={styles.container}>
                <div className='z-10'>
                    <img src={logo} width={60} />
                </div>

                {/* MENU */}
                <ul className={styles.desktopMenu}>
                    <li className={styles.item}>START</li>
                    <li className={styles.item}>LEVEL ONE</li>
                    <li className={styles.item}>LEVEL TWO</li>
                </ul>

                {/* HAMBURGER */}
                <div onClick={handleMobileNav} className={styles.hamburger}>
                    {
                        !mobileNav ? <HiMenuAlt3 size={36} /> : <HiX size={36} />
                    }
                </div>

                {/* MOBILE MENU */}
                <ul className={
                    !mobileNav ? 'hidden' : styles.mobileMenu}>
                    <li className={styles.mobileItem}>START</li>
                    <li className={styles.mobileItem}>LEVEL ONE</li>
                    <li className={styles.mobileItem}>LEVEL TWO</li>
                </ul>

            </div>
        </>
    )
}


export default Nav
