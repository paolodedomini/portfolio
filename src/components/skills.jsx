import React from 'react'
import { BsLink45Deg, BsLinkedin, BsFillFileEarmarkArrowDownFill, BsFillArrowLeftCircleFill, BsFillCloudDownloadFill } from "react-icons/bs"
import { GiHeartOrgan } from 'react-icons/gi'
import resume from '../images/resume.pdf'
import portfoliopdf from '../images/progetti2021.pdf'
function Skills({
  skills,
  setMouseOut,
  setApp,
  personal,
  setOpenSkills,
  openSkills,
  openCredits,
  setOpenCredits }) {

  return (
    <>
      <ul className={`skills ${!openSkills ? 'closed' : ''}`}>
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
            <li onClick={() => setOpenSkills(false)}><BsFillArrowLeftCircleFill /> <span>about</span></li>
            <li><a href={personal.linkedin} target="_blank" rel="noopener" title="linkedin"><span><BsLinkedin /></span></a></li>
            <li><a href={resume} target="_blank" rel="noopener" download title="curriculum"><span><BsFillFileEarmarkArrowDownFill /></span></a></li>
            <li class="portfolio-pdf"><a href={portfoliopdf} target="_blank" rel="noopener" download title="portfolio"><span><BsFillCloudDownloadFill /></span></a></li>
          </ul>
        </li>
        <li>

          <span>Made with <GiHeartOrgan /> and <a href="https://www.gatsbyjs.com" rel="noopener" target="_blank">GatsbyJS</a> <br />
            <div className="credits-btn" onClick={()=>setOpenCredits(true)}>Credits</div>
          </span>
        </li>
      </ul>
    </>
  )
}

export default Skills