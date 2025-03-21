import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../css/Detail/detail.css'

function MainSiteDetail({onClose}) {

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
            <figure><img src="/mainSiteImg.PNG" alt="mainSiteImg" /></figure>
          </div>

          <div className='information'>
            <div>
              <p>소개</p>
              <span>React로 만든 개인 포트폴리오 사이트입니다.<br />
                OTT플랫폼에서 영감을 얻은 디자인과<br />
                사용자에게 몰입감을 줄 수 있는<br />
                <span className='accent'>자연스러운 페이지 전환</span>이 특징입니다.</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발 과정</p>
              <div>
                <span>전반적으로 OTT플랫폼들의 디자인에서 영감을 받았습니다.<br />
                  <span className='accent'>피드백을 통하여 Information컴포넌트의 디자인을 수정</span>하였습니다.<br />
                  (기존에는 클릭할것이 너무 많아 직관적이지않다는 피드백을 반영,<br />
                  꼭 필요한 요소를 제외한 정보들은 과감하게 제거하였습니다.) <br/>
                  아래는 수정 전, 수정 후 사진 입니다.</span>
                <div className='feedback'>
                  <figure><img src="/feedback01.png" alt="feedback01" /></figure>
                  <p>⇒</p>
                  <figure><img src="/feedback02.png" alt="feedback02" /></figure>
                </div>
                <span>기존에는 헤더부분의 NavBar가 focus되었을 때 색상 변화 효과를 주었습니다.<br />
                  하지만 두번클릭해야 색상이 바뀌는 오류가 있어 Hover이벤트로 바꾸었습니다.<br />
                  개선 전, 기본 NavBar의 글씨가 어두운 색상(#444)이라 눈에 띄지않았지만<br />
                  <span className='accent'>개선 후 눈에띄는 색상으로 인해 사용자의 클릭을 유도</span>할 수 있게되었습니다.</span>
              </div>
            </div>
            <span className='bar'></span>

            <div>
              <p>페이지</p>
              <span>메인, 서브 (4)<br />
                시작화면<br />
                AboutME, ViewPortfolio, Skill, Detail</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>Tool</p>
              <span>Html, SCSS, React, Framer-motion</span>
            </div>
            <span className='bar'></span>

            <div>
              <p>개발기간</p>
              <span>2025.03 (7일)<br />
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
              <span>이번 프로젝트를 하면서 중첩라우팅을 처음 사용해보았습니다.<br />
                <span className='accent'>중첩라우팅을 사용하면서 라우팅의 절대경로와 상대경로에대해</span> 이해할 수 있었습니다.<br />
                다양한 피드백을 통해 내가 추구하는 디자인 뿐만이아닌,<br />
                사용자가 편리한 디자인을 만들어야한다는점을 다시한번 상기하였습니다.<br />
                <span className='accent'>Framer-motion을 적극적으로 사용함으로써 숙련도를 높이고자 했습니다.</span><br />
                figma를 통해 기획을 진행하였습니다.<br />
                기획을 잘 해놓으니 코드작성시간이 현저히 줄어들었습니다.<br />
                <span className='accent'>이를통해 기획의 중요성을 다시한번 깨닫게 되었습니다.</span></span>
            </div>
            <span className='bar'></span>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default MainSiteDetail;