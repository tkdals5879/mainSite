import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import CloneCordingDetail from './CloneCordingDetail'

function CloneCording() {

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className='portfolioWrap'>

      <figure>
        <img src="/cloneCordingImg.PNG" alt="cloneCordingImgBg" />
      </figure>

      <div className='portfolioInner'>
        <motion.div className='titleWrap'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30 }, opacity: { duration: 2, delay: .2 } }}>
          <div>
            <h1>클론코딩 ( 미모던 피부과 )</h1>
            <span></span> {/* 주황색 포인트 점 */}
          </div>
          <ul>
            <li className='eng'>Html</li>
            <li className='eng'>CSS</li>
            <li className='eng'>JavaScript</li>
            <li className='eng'>Swiper</li>
            <li>반응형</li>
          </ul>
        </motion.div>

        <motion.div className='btnWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .4 }, opacity: { duration: 2, delay: .4 } }}>
          <a href="https://clone-mimodern.netlify.app/" target='_blank' rel="noopener noreferrer">
            <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >View Site</motion.button></a>

          <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={handleModalOpen}>Detail</motion.button>
          <a href="https://github.com/tkdals5879/mimodern" target='_blank' rel="noopener noreferrer">
            <motion.button type='button' className='eng lastbtn' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >GitHub</motion.button></a>
        </motion.div>

        <motion.div className='descriptionWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .6 }, opacity: { duration: 2, delay: .6 } }}>
          <div>
            <span></span> {/* Description옆 주황색 바 */}
            <p className='eng'>Description</p>
          </div>
          <p>이 사이트는 미모던 피부과의원 클론코딩 사이트입니다.<br />
            Html,CSS,JS로 구현하였습니다.<br />
            실제 홈페이지처럼 스크롤이벤트와 버튼 이벤트를 구현하였습니다.<br />
            1인개발, 기여도 100%</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && <CloneCordingDetail onClose={handleModalClose} />}
      </AnimatePresence>

    </div>
  )
}

export default CloneCording;
