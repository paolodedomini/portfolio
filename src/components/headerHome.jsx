import * as React from "react"
import { useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import Scritte from "./scritte"
import Skills from "./skills"
import Intro from "./intro"
import DownloadPortfolio from "./downloadPortfolio"
import Credits from "./credits"
const HeaderHome = () => {
  const data = useStaticQuery(graphql`
      {
        allDataYaml {
          edges {
            node {
              skills {
                title
                autore
                motto
                image{childImageSharp{
                  gatsbyImageData(
                        width: 1728
                        placeholder: BLURRED)
                }}
                apps {
                  link
                  name
                  logo{
                      childImageSharp{
                          gatsbyImageData(
                              width:50
                              placeholder: TRACED_SVG
                              quality: 90)
                      }
                  }
                }
              }
              personal {
                defaultImage{
                  childImageSharp {
                    gatsbyImageData(
                        width: 1728
                        quality: 90
                        placeholder: BLURRED)
                  }
                }
                linkedin

                pdf{
                  childImageSharp{
                    gatsbyImageData(width:30)
                  }
                }
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
  const defaultImage = getImage(personal.defaultImage)
  const arrayListaApps = []
  const [app, setApp] = React.useState({})
  const [mouseOut, setMouseOut] = React.useState(false)
  const [openSkills, setOpenSkills] = React.useState(true)
  const [openCredits, setOpenCredits] = React.useState(false)
  const backgrounds = useRef()

  skills.forEach((itema) => {
    itema.apps.forEach((itemb) => {
      itemb.main = itema.title
      arrayListaApps.push(itemb)
    })
  })

  return (
    <header>
      <div className="block-home">
        <div className="logo">
          <GatsbyImage className="image-logo" image={logo} alt={personal.altlogo} />
          <ul className="titles">
            {personal.titles.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </div>

        <div className="wrapper-box-home">
          <Credits openCredits={openCredits} setOpenCredits={setOpenCredits} />
          <Intro setOpenSkills={setOpenSkills} openSkills={openSkills} />
          <Skills
            openSkills={openSkills}
            setOpenSkills={setOpenSkills}
            skills={skills}
            setMouseOut={setMouseOut}
            setApp={setApp}
            personal={personal}
            openCredits={openCredits}
            setOpenCredits={setOpenCredits}
          />
        </div>

        <ul className="apps">
          {arrayListaApps.map((item) => {
            const logoApp = getImage(item.logo)

            return (
              <> 
              {item.logo &&
                <motion.li
                  animate={(app.title !== item.main) && mouseOut ? { scale: .8, opacity: 0.3 } : { scale: 1, opacity: 1 }}
                  transition={{
                    repeat: 'infinity',
                  }}
                >
                  <a href={item.link} target="_blank" rel="noopener">
                    <GatsbyImage class="logo-apps" image={logoApp} alt={item.name} />
                  </a>
                </motion.li>}</>
            )
          })}
        </ul>
      </div>

      <Scritte app={app} mouseOut={mouseOut} />


      <DownloadPortfolio mouseOut={mouseOut} />


      <AnimatePresence>
        {skills.map((item, index) => {
          if ((item.title === app.title) && mouseOut) {
            const immagineSkill = getImage(item.image)

            return (

              <motion.div
                key={index}

                className={`immagine-home `}
                initial={{ opacity: 0, filter: 'blur(50px)', height: '80%', top: '10%' }}
                animate={{ opacity: 1, filter: 'blur(0px)', height: '100%', top: '0%' }}
                exit={{ opacity: 0, filter: 'blur(50px)', height: '80%', top: '10%' }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <GatsbyImage
                  ref={backgrounds}
                  image={immagineSkill}
                  alt="Immagine di sfondo home"

                />
              </motion.div>

            )
          }

        }

        )}</AnimatePresence>


      <AnimatePresence>
        <motion.div

          className={`immagine-home default`}
          initial={{ opacity: 0, filter: 'blur(10px)', }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}

        >
          <GatsbyImage
            image={defaultImage}
            alt="Immagine di sfondo home"
          />
        </motion.div>
      </AnimatePresence>
    </header>
  )
}


export default HeaderHome