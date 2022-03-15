import React from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'

function Intro({setOpenSkills, openSkills}) {
  return (
    <div className={`boxintro ${openSkills ? 'close' : ''}`}>
        <p>
            <strong>Web designer</strong>, da quasi vent'anni.
            <br/>E' un lavoro che 
            intreccia tecnica, progettazione e comunicazione.<br />
            Stile e tecnologia cambiano continuamente.<br/>
            Esperienza e metodo sono la stessa cosa e nessuna delle due è mai abbastanza.
            <br/> Curiosità e dedizione, basi di ogni nuovo progetto.
            <span className='arrow-intro ' onClick={()=>setOpenSkills(true)}><BsArrowRightCircleFill className='flip-scale-up-hor' /></span>
        </p>
        </div>
  )
}

export default Intro