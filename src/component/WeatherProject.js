import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import WeatherProjectDetail from './WeatherProjectDetail';

function WeatherProject() {

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
        <img src="/weatherProjectImg.PNG" alt="weatherProjectImgBg" />
      </figure>

      <div className='portfolioInner'>
        <motion.div className='titleWrap'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30 }, opacity: { duration: 2, delay: .2 } }}>
          <div>
            <h1>날씨 앱</h1>
            <span></span> {/* 주황색 포인트 점 */}
          </div>
          <ul>
            <li className='eng'>Html</li>
            <li className='eng'>SCSS</li>
            <li className='eng'>React</li>
            <li className='eng'>Redux & Redux-Toolkit</li>
            <li className='eng'>Framer-motion</li>
            <li>반응형</li>
          </ul>
        </motion.div>

        <motion.div className='btnWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .4 }, opacity: { duration: 2, delay: .4 } }}>

          <a href="https://sangmin-weatherproject.netlify.app/" target='_blank' rel="noopener noreferrer">
            <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >
              View Site
            </motion.button>
          </a>

          <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={handleModalOpen}>Detail</motion.button>

          <a href="https://github.com/tkdals5879/weatherProject" target='_blank' rel="noopener noreferrer">
            <motion.button type='button' className='eng lastbtn' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} >
              GitHub
            </motion.button>
          </a>

        </motion.div>

        <motion.div className='descriptionWrap'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: { type: 'spring', damping: 30, delay: .6 }, opacity: { duration: 2, delay: .6 } }}>
          <div>
            <span></span> {/* Description옆 주황색 바 */}
            <p className='eng'>Description</p>
          </div>
          <p>이 사이트는 리액트로 만들어진 날씨정보 사이트입니다.<br />
            리액트쿼리를 이용하여 API를 받아와 날씨정보를 표시합니다.<br />
            특정 국가를 검색하면 그 나라의 날씨 및 뉴스정보를 확인할 수 있습니다.<br />
            1인개발, 기여도 100%</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && <WeatherProjectDetail onClose={handleModalClose} />}
      </AnimatePresence>

    </div>
  )
}

export default WeatherProject;
