import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderHome = () => {
    const data = useStaticQuery(graphql`
      {
        allDataYaml {
          edges {
            node {
              skills {
                title
                apps {
                  link
                  name
                }
              }
              personal {
                logo {
                  childImageSharp {
                    gatsbyImageData(width: 300)
                  }
                }
                titles
              }
            }
          }
        }
      }
    `)


    const skills = data.allDataYaml.edges[0].node.skills
    const personal = data.allDataYaml.edges[0].node.personal
    const logo = getImage(personal.logo)
    const logos = skills.map((item) => {
       const y = item.apps.map((i)=>i.logo)
        return y
    })
    console.log(logos);
    return <header>
        <div className="block-home">
            <div className="logo">
                <GatsbyImage image={logo} alt={personal.altlogo} />
                <ul>
                    {personal.titles.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
            <ul className="skills">
                {skills.map((item) => {
                    return <li key={item.title}>
                        {item.title}
                        <ul>

                            {item.apps.map((item) => {
                                return <li>{item.name}</li>

                            })}
                        </ul>
                    </li>
                })}
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