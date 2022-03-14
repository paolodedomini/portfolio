import React from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'

function Intro({setOpenSkills, openSkills}) {
  return (
    <div className={`boxintro ${openSkills ? 'close' : ''}`}>
        <p>
            <strong>Web designer</strong>, da quasi vent'anni.
            <br/>E' un lavoro che 
            intreccia tecnica e istinto, progettazione e comunicazione.
            Stile e tecnologia cambiano continuamente.<br/>
            Esperienza e metodo sono la stessa cosa e nessuna delle due è mai abbastanza.
            <br/> Curiosità e dedizione, basi di ogni nuovo progetto.
            <span className='arrow-intro flip-scale-up-hor' onClick={()=>setOpenSkills(true)}><BsArrowRightCircleFill /></span>
        </p>
        </div>
  )
}

export default Intro