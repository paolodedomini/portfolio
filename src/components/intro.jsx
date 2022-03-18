import React from 'react'
import { BsArrowRightCircleFill, BsFillEnvelopeFill } from 'react-icons/bs'

function Intro({ setOpenSkills, openSkills }) {
  return (
    <div className={`boxintro ${openSkills ? 'close' : ''}`}>
      <p>
        <strong>Designer digitale</strong>, da quasi vent'anni.
        <br />Il mio lavoro intreccia tecnica, progettazione e comunicazione.<br />
        Esperienza e metodo sono la stessa cosa e nessuna delle due è mai abbastanza.<br />
        Curiosità, creatività e concentrazione, le basi di ogni nuovo progetto.
        <div><a className='mailto' target="_blank" rel="noopener" href="mailto:paolodedomini@gmail.com"><BsFillEnvelopeFill /> Mailme...</a>  </div>
        <span className='arrow-intro' onClick={() => setOpenSkills(true)} ><BsArrowRightCircleFill className='flip-scale-up-hor' /></span>
      </p>
    </div>
  )
}

export default Intro