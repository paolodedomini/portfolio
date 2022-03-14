import React from 'react'
import { BsLink45Deg, BsLinkedin, BsFillFileEarmarkArrowDownFill } from "react-icons/bs"

function Skills({skills,setMouseOut,setApp,personal}) {
  return (
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
  )
}

export default Skills