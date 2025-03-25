import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import NewPortfolioDetail from './NewPortfolioDetail';


function NewPortfolio() {

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className='portfolioWrap'>

      <div className='portfolioInner'>
        <motion.div className='titleWrap'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30 }, opacity: { duration: 2, delay: .2 } }}>
          <div>
            <h1>새로운 프로젝트</h1>
            <span></span> {/* 주황색 포인트 점 */}
          </div>
          <ul>
            <li>현재 진행중인 작업입니다.</li>
          </ul>
        </motion.div>

        <motion.div className='btnWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .4 }, opacity: { duration: 2, delay: .4 } }}>
          {/* <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >View Site</motion.button> */}
          <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={handleModalOpen}>Detail</motion.button>
          {/* <motion.button type='button' className='eng lastbtn' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >GitHub</motion.button> */}
        </motion.div>

        <motion.div className='descriptionWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .6 }, opacity: { duration: 2, delay: .6 } }}>
          <div>
            <span></span> {/* Description옆 주황색 바 */}
            <p className='eng'>Description</p>
          </div>
          <p>백엔드 부트캠프를 수료한 지인과 협업하여 작업중인 프로젝트입니다.<br />
            2인개발, 기여도 50% (프론트 100%)</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && <NewPortfolioDetail onClose={handleModalClose} />}
      </AnimatePresence>

    </div>
  )
}

export default NewPortfolio;
