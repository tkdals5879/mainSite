import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import '../css/Skill/skill.css'

function Skill() {

  const hidden = {
    y: 30,
    opacity: 0
  }

  const visible = {
    y: 0,
    opacity: 1
  }

  return (
    <div className='skillWrap'>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/html.png" alt="html" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>HTML</h2>
        </div>
        <p>HTML을 사용하여 웹 페이지의 구조를 설계하고, 시멘틱 태그와 접근성을 고려한 마크업을 작성합니다. <br /> 다양한 디바이스와 브라우저에서 호환되는 반응형 레이아웃을 구현할 수 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/css.png" alt="css" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>CSS</h2>
        </div>
        <p>CSS를 활용하여 웹 페이지의 레이아웃을 설계하고, Flexbox와 Grid를 사용해 반응형 디자인을 구현합니다. <br /> 또한, CSS 애니메이션과 트랜지션을 활용하여 인터랙티브한 요소를 부여할 수 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/js.png" alt="js" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Java Script</h2>
        </div>
        <p>JavaScript를 사용하여 웹 페이지의 동적 기능을 구현하고, DOM 조작 및 이벤트 핸들링을 통해 사용자와 상호작용하는 동적인 기능을 구현합니다.<br /> swiper,gsap를 사용한 경험이 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/react.png" alt="react" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>React</h2>
        </div>
        <p>React를 활용하여 SPA(Single Page Application)를 개발하고, 컴포넌트 기반 아키텍처를 통해 효율적인 UI 개발을 진행할 수 있습니다. <br /> Router,Axios,Tanstack Query, Redux, Redux-toolkit, FramerMotion 사용경험이 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/redux.svg" alt="redux" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Redux Toolkit</h2>
        </div>
        <p>Redux와 Redux Toolkit을 사용하여 애플리케이션의 전역 상태를 중앙에서 관리하고, <br /> 비동기 처리(Api호출) 및 액션 디스패치를 효율적으로 구현하여 데이터 흐름을 관리할 수 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/framerMotion.png" alt="framerMotion" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Framer Motion</h2>
        </div>
        <p>Framer Motion을 활용하여 React 애플리케이션에 부드럽고 직관적인 애니메이션 효과를 구현하며, <br /> 사용자와 상호작용하는 인터랙티브한 기능 및 디자인을 구현할 수 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/figma.png" alt="figma" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Figma</h2>
        </div>
        <p>Figma의 오토레이아웃, 마스터 컴포넌트 등의 기능을 활용하여, 웹 및 애플리케이션의 UI/UX 디자인을 제작할 수 있습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/github.png" alt="github" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Git-Hub</h2>
        </div>
        <p>Git과 Git-Hub를 활용하여 코드를 커밋하고 저장,관리 하는법을 익혔습니다.</p>
      </motion.div>

      <motion.div className='contentsWrap' initial={hidden} animate={visible} transition={{type:'spring', stiffness:120}} >
        <div className='icon'>
          <figure>
            <img src="/netlify.png" alt="netlify" />
          </figure>
          <div className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
          <h2>Netlify</h2>
        </div>
        <p>Netlify를 사용하여 React 애플리케이션을 배포할 수 있습니다.</p>
      </motion.div>

    </div>
  )
}

export default Skill;