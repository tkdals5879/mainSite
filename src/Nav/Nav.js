import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/Nav/nav.css'


function Nav() {

  const email = "tkdals58799@gmail.com"
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    .then(() => alert("클립보드에 이메일 주소가 복사되었습니다 !"))
    .catch((error) => console.log("클립보드에 이메일 주소를 복사하는데 실패하였습니다.",error))
  }

  return (
    <motion.ul
      className='navWrap'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>
      <li className='eng'><Link to={'/aboutMe'}>About me</Link></li>
      <li className='eng'><Link to={'/aboutMe/viewPortfolio'}>ViewPortfolio</Link></li>
      <li className='eng'><Link to={'/aboutMe/skill'}>Skill</Link></li>
      <li className='eng email' onClick={copyToClipboard}>E-mail : tkdals58799@gmail.com</li>
    </motion.ul>
  )
}

export default Nav;
