import * as React from "react"
import { useRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { BsLink45Deg, BsLinkedin, BsFillFileEarmarkArrowDownFill } from "react-icons/bs"
import Scritte from "./scritte"

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
        <ul className="skills">
          {skills.map((item) => {
            return <li key={item.title} onMouseOver={() => {
              setMouseOut(true); setApp(
                {
                  title: item.title,
                  motto: item.motto,
                  autore: item.autore
                })
            }} onMouseLeave={() => { setMouseOut(false) }}>
              <span>{item.title}</span>
              <span class="icon-chain-skills"><BsLink45Deg /></span>
              <ul>
                {item.apps.map((item) => {
                  return <li key={item.title}><a href={item.link} target="_blank" rel="noopener">{item.name}</a></li>
                })}
              </ul>
            </li>
          })}
          <li>
            <ul className="social">
              <li><a href={personal.linkedin} target="_blank" rel="noopener"><span><BsLinkedin /></span></a></li>
              <li><a href="#"><span><BsFillFileEarmarkArrowDownFill /></span></a></li>
            </ul>
          </li>
        </ul>

        <ul className="apps">
          {arrayListaApps.map((item) => {
            const logoApp = getImage(item.logo)

            return (
              <motion.li
                animate={(app.title !== item.main) && mouseOut ? { scale: .8, opacity: 0.6 } : { scale:1, opacity:1 }}

                transition={{
                  repeat: 'infinity',


                }}
              >
                <a href={item.link} target="_blank" rel="noopener">
                  <GatsbyImage class="logo-apps" image={logoApp} alt={item.name} />
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <Scritte app={app} mouseOut={mouseOut} />

      {skills.map((item) => {
        if ((item.title === app.title) && mouseOut) {
          const immagineSkill = getImage(item.image)

          return (
            <AnimatePresence>
              <motion.div
                className={`immagine-home `}
                initial={{ opacity: 0.4, filter: 'blur(50px)', height: '100%' }}
                animate={{ opacity: 1, filter: 'blur(0px)', height: 400 }}
                transition={{ duration: 2, ease: [0.075, 0.82, 0.165, 1] }}
                exit={{ opacity: 0 }}
              >
                <GatsbyImage
                  ref={backgrounds}
                  image={immagineSkill}
                  alt="Immagine di sfondo home"

                />
              </motion.div>
            </AnimatePresence>
          )
        }

      }

      )}

      {!mouseOut && <motion.div
        className={`immagine-home default ${mouseOut ? "open" : ""}`}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
      >
        <GatsbyImage
          image={defaultImage}
          alt="Immagine di sfondo home"
        />
      </motion.div>}
    </header>
  )
}


export default HeaderHome