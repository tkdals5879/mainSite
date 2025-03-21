import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../css/Detail/detail.css'

function WeatherProjectDetail({onClose}) {

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
            <figure><img src="/weatherProjectImg.PNG" alt="weatherProjectImg" /></figure>
          </div>

          <div className='information'>
            <div>
              <p>소개</p>
              <span>React로 만든 날씨 및 뉴스를 확인할 수 있는 앱 입니다.<br />
                메인화면에서는 <span className='accent'>현재위치를 기반으로 한 날씨정보</span>를 불러옵니다.<br />
                검색기능과, 즐겨찾기, 뉴스 기능이 구현되어있습니다.<br />
                도시명에 마우스를 올리면 해당국가에 대한 정보가 표시됩니다.</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발 과정</p>
              <div>
                <span>밝은 느낌을 주는 디자인을 구상했습니다.<br />
                  <span className='accent'>여러개의 API를 한번에 관리하고 불러오는 과정에서<br />
                  API를 분할하고 정리하는방법과 API Key를 안전하게 관리하는방법</span>을 알게되었습니다.<br />
                  <span className='accent'>기존은 Api키를 직접적으로 하드코딩했으나 .env에 담아 사용하는방식</span>으로<br/></span>
                <span>첫번째 완성한 디자인을 바탕으로 지인들에게 평가를 받았습니다.<br />
                  뉴스 및 날씨앱 버튼의 배치수정 피드백과<br />
                  국가명 및 온도의 레이아웃 피드백을 받았습니다.<br />
                  <span className='accent'>이러한 피드백을 바탕으로 UI를 개선하였습니다.</span></span>
              </div>
            </div>
            <span className='bar'></span>

            <div>
              <p>페이지</p>
              <span>메인, 서브 (3)<br />
                메인화면<br />
                즐겨찾기, 뉴스, 국가정보</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>Tool</p>
              <span>Html, SCSS, React, Redux & Redux Toolkit, Framer-motion</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발기간</p>
              <span>2025.02 (14일)<br />
                (1인개발, 기여도 100%)</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>사이트</p>
              <span>반응형</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>배운점</p>
              <span>React와 React Redux 및 Redux Toolkit을 연습하기위해 제작하였습니다.<br />
                전역상태로 상태를 관리하는 법을 이해하게되었습니다.<br />
                API를 호출하여 필요한 정보를 추출 할 수 있게 되었습니다.<br />
                <span className='accent'>API호출에 사용되는 Key를 안전하게 관리하는방법을 알게되었습니다.</span> <br/>
                정말 생각보다 다양한 API 데이터가 있다는 것을 알게되었습니다.<br />
                이를 통해 다양한 정보를 제공하는 신박한 웹 및 앱을 제작할 수 있다고 생각했습니다.<br />
                figame를 통해 기획을 진행하였습니다.</span>
            </div>
            <span className='bar'></span>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default WeatherProjectDetail;