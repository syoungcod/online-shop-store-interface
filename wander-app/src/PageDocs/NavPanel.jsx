import navstyle from './styleSheets/NavPanel.module.css'
import { Link, Outlet } from 'react-router-dom'

function NavPanel(){

    return(
        <>
            <div className={navstyle.panelContainer}>
                <ul>
                    <li className={navstyle.nav}><Link className={navstyle.links}>Home</Link></li>
                    <li className={navstyle.nav}><Link className={navstyle.links}>About Us</Link></li>
                    <li className={navstyle.nav}><Link className={navstyle.links}>Contact Us</Link></li>
                </ul>
                <div>

                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavPanel