import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeaderHome = () => {

    return <header>
        <div className="block-home">
            <ul className="skills">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul className="apps">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <StaticImage
            src="../images/back-home.jpg"
            width={1728}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Immagine di sfondo home"
            className="immagine-home"
        />
    </header>

}


export default HeaderHome