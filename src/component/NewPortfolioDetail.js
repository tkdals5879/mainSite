import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../css/Detail/detail.css'

function NewPortfolioDetail({onClose}) {

  const modalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='mainSiteDetailWrap' onClick={onClose}>
      <motion.div className='mainSiteDetail'
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}>

        <motion.button
        type='button'
        onClick={onClose}
        whileHover={{scale:1.5}}
        whileTap={{rotate: 20}}><FontAwesomeIcon icon={faXmark} /></motion.button>

        <div className='contents'>
          <div className='thumbNail'>
            {/* <figure><img src="" alt="" /></figure> */}
          </div>

          <div className='information'>
            <div>
              <p>소개</p>
              <span>현재 개발중인 사이트입니다. <br/>
              백엔드 부트캠프를 수료한 지인과 협업하여 작업중인 프로젝트입니다.<br/>
              2인개발,기여도50% (프론트100%)</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발 과정</p>
              <div>
                <span>작업중인 프로젝트 입니다.</span>
              </div>
            </div>
            <span className='bar'></span>

            <div>
              <p>페이지</p>
              {/* <span></span> */}
            </div>
            <span className='bar'></span>

            <div>
              <p>Tool</p>
              {/* <span></span> */}
            </div>
            <span className='bar'></span>

            <div>
              <p>개발기간</p>
              <span>2025.04 <br />
                [ 2인개발, 기여도 50%  (프론트 100%) ]</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>사이트</p>
              <span>반응형</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>배운점</p>
              {/* <span></span> */}
            </div>
            <span className='bar'></span>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default NewPortfolioDetail;