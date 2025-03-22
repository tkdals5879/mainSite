import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import MainSiteDetail from './MainSiteDetail';

import '../css/MainSite/mainsite.css'

function MainSite() {

  const [modalOpen,setModalOpen] = useState(false)
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className='portfolioWrap'>
      <motion.div className='titleWrap'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { type: 'spring', damping: 30 }, opacity: { duration: 2, delay: .2 } }}>
        <div>
          <h1>포트폴리오 메인 사이트</h1>
          <span></span> {/* 주황색 포인트 점 */}
        </div>
        <ul>
          <li className='eng'>Html</li>
          <li className='eng'>SCSS</li>
          <li className='eng'>React</li>
          <li className='eng'>Framer-motion</li>
          <li>반응형</li>
        </ul>
      </motion.div>

      <motion.div className='btnWrap'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { type: 'spring', damping: 30, delay: .4 }, opacity: { duration: 2, delay: .4 } }}>
        <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >View Site</motion.button>
        <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={handleModalOpen}>Detail</motion.button>
        <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >GitHub</motion.button>
      </motion.div>

      <motion.div className='descriptionWrap'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { type: 'spring', damping: 30, delay: .6 }, opacity: { duration: 2, delay: .6 } }}>
        <div>
          <span></span> {/* Description옆 주황색 바 */}
          <p className='eng'>Description</p>
        </div>
        <p>이 사이트는 리액트로 만들어진 저의 포트폴리오 사이트입니다.<br />
          전체적인 디자인은 OTT 플랫폼들에서 영감을 받았습니다.<br />
          리액트의 특징을 잘 살려, 부드러운 화면전환과 상태관리를 통한 여러효과를 구현했습니다.<br />
          1인개발, 기여도 100%</p>
      </motion.div>

    <AnimatePresence>
    {modalOpen && <MainSiteDetail onClose={handleModalClose}/>}
    </AnimatePresence>

    </div>
  )
}

export default MainSite;
