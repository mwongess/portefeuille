import { Link } from "react-router-dom"
import HeaderStyles from './HeaderStyles.module.css'

export const Header =()=> {
    return(
        <>
        <div className={HeaderStyles.navbar}>
            <div className={HeaderStyles.navbarLeft}>
                <h2>AeMG</h2>
            </div>
            <div className={HeaderStyles.navbarRight}>
                <p><Link to="">Portfolio</Link></p>
                <p><Link to="">About</Link></p>
                <p><Link to="">Contact</Link></p>
                <button>Hire Me</button>
            </div>
        </div>
        </>
    )
}