import React from 'react'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import { motion, AnimatePresence } from "framer-motion"
import portfoliopdf from '../images/progetti2021.pdf'
function DownloadPortfolio() {
    return (

        <a
            href={portfoliopdf}
            target="_blank"
            rel="noopener"

        >
            <motion.div 
            className='download-portfolio'
            initial={{ opacity: 0, filter:'blur(20px)', bottom:1000 }}
            animate={{ opacity: 1, filter:'blur(0px)', bottom:20}}
            transition={{ duration: 1, delay: 1 }}
            >
                <span>Portfolio <br /><BsFillCloudDownloadFill /></span> 
            </motion.div>
        </a>

    )
}

export default DownloadPortfolio