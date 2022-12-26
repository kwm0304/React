import { FaGithub } from "react-icons/fa"
import { FaLinkedin  } from "react-icons/fa"

function Footer() {
    
    return(
        <footer>
            <div className="footertext">Designed and Built by Kenan McKenzie</div>
            <h3 className="logos"> <a href="https://github.com/kwm0304"><FaGithub /></a> <a href="https://www.linkedin.com/feed/?trk=onboarding-landing"><FaLinkedin /></a></h3>
        </footer>
    )
}
export default Footer;