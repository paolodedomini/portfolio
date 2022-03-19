import React from 'react'
import { BsArrowRightCircleFill, BsFillEnvelopeFill } from 'react-icons/bs'

function Credits({ setOpenCredits, openCredits }) {
    return (
        <div className={`boxcredits ${!openCredits ? 'close' : ''}`}>
<h2>Many thanks and full respect to:</h2>
            <ul>
                <li> <a href="https://unsplash.com/@europeana">Europeana</a></li>
                <li> <a href="https://unsplash.com/@john_jennings">John Jennings</a></li>
                <li> <a href="https://unsplash.com/@blutch_">Antony le Feur</a></li>
                <li> <a href="https://unsplash.com/@lasmaa">Lāsma Artmane</a></li>
                <li> <a href="https://unsplash.com/@ourselp">Philippe Oursel</a></li>
            </ul>
            <span className='arrow-intro' onClick={() => setOpenCredits(false)} ><BsArrowRightCircleFill className='flip-scale-up-hor' /></span>


        </div>
    )
}

export default Credits