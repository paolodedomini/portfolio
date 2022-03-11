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
                  logo{
                      childImageSharp{
                          gatsbyImageData(
                              width:50
                              placeholder: TRACED_SVG
                              quality: 50)
                      }
                  }
                }
              }
              personal {
                logo {
                  childImageSharp {
                    gatsbyImageData(
                        width: 300
                        placeholder: BLURRED)
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

    const arrayListaApps = []

    skills.forEach((itema) => {
        itema.apps.forEach((itemb) => {
            itemb.main = itema.title
            return arrayListaApps.push(itemb)
        })
    })
    const [app, setApp] = React.useState()



    return (
    <header>
        <div className="block-home">
            <div className="logo">
                <GatsbyImage class="image-logo" image={logo} alt={personal.altlogo} />
                <ul className="titles">
                    {personal.titles.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
            <ul className="skills">
                {skills.map((item) => {
                    return <li key={item.title} onMouseOver={() => setApp(item.title)} onMouseLeave={() => setApp('')}>
                        {item.title}
                        <ul>
                            {item.apps.map((item) => {
                                return <li key={item.title}><a href={item.link} target="_blank" rel="noopener">{item.name}</a></li>
                            })}
                        </ul>
                    </li>
                })}
            </ul>
            <ul className="apps">
                {arrayListaApps.map((item) => {
                    const logoApp = getImage(item.logo)
                    console.log(item.main === app, 'test');
                    return (
                        logoApp && <li className={`${(item.main === app) ? "open" : ""}`}> <a href={item.link} target="_blank" rel="noopener"> <GatsbyImage class="logo-apps" image={logoApp} alt={item.name} /></a></li>)
                })}
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
)
}


export default HeaderHome