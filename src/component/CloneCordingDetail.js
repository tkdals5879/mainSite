import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../css/Detail/detail.css'

function CloneCording({ onClose }) {

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
          whileHover={{ scale: 1.5 }}
          whileTap={{ rotate: 20 }}><FontAwesomeIcon icon={faXmark} /></motion.button>

        <div className='contents'>
          <div className='thumbNail'>
            <figure><img src="/cloneCordingImg.PNG" alt="cloneCordingImg" /></figure>
          </div>

          <div className='information'>
            <div>
              <p>소개</p>
              <span>Html,Css,JavaScript로만든 클론코딩 사이트입니다.<br />
                기존 홈페이지의 스크롤 이벤트와 트렌지션 이벤트를 구현했습니다.<br /></span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발 과정</p>
              <div>
                <span>첫 클론코딩 사이트입니다.<br />
                  swiper을 사용하여 가로 슬라이드를 구현하였습니다. <br />
                  스크롤 이벤트를 구현하기위하여 다양한 자료를 찾아보며 학습했습니다.
                </span>
              </div>
            </div>
            <span className='bar'></span>

            <div>
              <p>페이지</p>
              <span>메인, 서브 (2)<br />
                시작화면<br />
                시작 모달창, + 버튼 모달창</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>Tool</p>
              <span>Html, Css, javaScript</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발기간</p>
              <span>2024.12 (14일)<br />
                (1인개발, 기여도 100%)</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>사이트</p>
              <span>PC화면 지원</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>배운점</p>
              <span>이번 프로젝트를 하면서 swiper을 처음 사용해보았습니다.<br />
                <span className='accent'>swiper의 사용방법을</span> 이해할 수 있었습니다.<br />
                <span className='accent'>타인의 코드를 분석하고 뜯어보는 매우 유익한 프로젝트였습니다.</span><br />
              </span>
            </div>
            <span className='bar'></span>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default CloneCording;