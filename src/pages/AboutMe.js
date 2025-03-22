import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import '../css/AboutMe/aboutMe.css';

function AboutMe() {
  const location = useLocation();
  const navigate = useNavigate()

  const gotoViewportfolio = () => {
    navigate('/aboutMe/viewPortfolio')
  }

  const email = "tkdals58799@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    .then(() => alert("클립보드에 이메일 주소가 복사되었습니다 !"))
    .catch((error) => console.log("클립보드에 이메일 주소를 복사하는데 실패하였습니다.", error))
  }

  return (
    <>
      {location.pathname === "/aboutMe" && (
        <div className='aboutMeWrap'>

          <motion.div
            className='bannerWrap' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <motion.div
              className='titleWrap'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ y: { type: 'spring', damping: 30 }, opacity: { duration: 2, delay: .2 } }}>
              <div>
                <div className='verticalBar'></div>
                <h1 className='eng'>Lee sang min</h1>
              </div>
              <ul>
                <li className='eng'>1999.08.03(27)</li>
                <li className='eng'>4 Portfolio</li>
                <li className='eng'>8 Tech</li>
                <li className='eng'>10+ Libraries</li>
              </ul>
            </motion.div>
            <div className='btnWrap'>
              <motion.button
                type='button'
                className='eng'
                onClick={gotoViewportfolio}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ y: { type: 'spring', damping: 30, delay: .4 }, opacity: { duration: 2, delay: .4 } }}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                whileTap={{ scale: 0.99, transition: { type: 'spring', stiffness: 500 } }}>
                View Portfolio
              </motion.button>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, x: -160, opacity: 1 }}
              transition={{ y: { type: 'spring', damping: 30, delay: .6 }, opacity: { duration: 2, delay: .6 } }}>
              <p>안녕하세요 웹 퍼블리셔 이상민입니다. <br />
                6개월간의 부트캠프수업을 수료하면서 4개의 포트폴리오를 제작하였습니다. <br />
                웹 개발을위해 현재 8가지의 개발기술을 사용할 수 있습니다. <br />
                <span className='accentFont'>특히</span> React에서 10+개의 라이브러리를 다룬 경험이 있습니다. <br /></p>
            </motion.div>

            <motion.ul
              className='skillIconWrap'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ y: { type: 'spring', damping: 30, delay: 0.8 }, opacity: { duration: 2, delay: 0.8 } }}>
              <li><img src="/html.png" alt="html" /></li>
              <li><img src="/css.png" alt="css" /></li>
              <li><img src="/js.png" alt="js" /></li>
              <li><img src="/react.png" alt="react" /></li>
              <li><img src="/redux.svg" alt="redux" /></li>
              <li><img src="/framerMotion.png" alt="framerMotion" /></li>
              <li><img src="/figma.png" alt="figma" /></li>
              <li><img src="/github.png" alt="github" /></li>
              <li><img src="/netlify.png" alt="netlify" /></li>
            </motion.ul>
          </motion.div>

          <motion.div className='induce' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
            <motion.span initial={{ y: 0 }} animate={{ y: 45 }} transition={{ duration: 1.5, delay: 2, repeat: Infinity }}></motion.span>
          </motion.div>

          <div className='faithWrap'>

            <motion.p initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ opacity: { duration: 2, delay: 1 }, x: { delay: 1, duration: .5 } }}>신념</motion.p>

            <div>
              <motion.div className='faithLeft' initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ opacity: { duration: 2, delay: 2 }, x: { delay: 2, duration: .5 } }}>
                <figure>
                  <img src="/idPhoto.jpeg" alt="idPhoto" />
                </figure>
                  <p>1999.08.03 (27)</p>
              </motion.div>
              <motion.div className='faithRight' initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ opacity: { duration: 2, delay: 2 }, x: { delay: 2, duration: .5 } }}>

                <div className='title'>
                  <p>웹퍼블리셔 : 이상민</p>
                  <ul>
                    <li className='star'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></li>
                    <li><span><p>전체이용가</p></span></li>
                    <li>성장하는</li>
                    <li>감동</li>
                    <li>힐링되는</li>
                    <li>스토리텔링</li>
                    <li>노력</li>
                    <li>성취감</li>
                  </ul>
                </div>

                <div className='btnWrap'>
                  <motion.button type='button' className='eng' onClick={gotoViewportfolio} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }}>PLAY</motion.button>
                  <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={copyToClipboard}>MY LIST</motion.button>
                </div>

                <p className='explain'>
                  살아오면서 느꼈던건, 노력은 정말 배신하지 않는다는 것 입니다. <br/>
                  노력을 통해 무언가를 이루어냈을때의 성취감은 이루 말할 수 없습니다.
                  그러한 성취감을 몇번 맛본다면 자연스레 그 일이 좋아지게됩니다.<br/>
                  자신이 좋아하는 일을 한다면 더 열심히 하게되고, 
                  결국 그 일을 잘하게 됩니다.<br/>
                  저는, 제가 좋아하는 일을 찾았습니다. 이제 즐길일만 남았습니다.
                  하루하루 성장해나갈 수 있는 기회를 주신다면 감사하겠습니다.<br/>
                  진심으로 노력하고 즐기며 일할 수 있는 인재입니다.</p>
              </motion.div>
            </div>
          </div>

        </div>
      )}
      <Nav />
      <Outlet />
    </>
  );
}

export default AboutMe;

// viewPortfolio 버튼 사이즈 조절하고 간격조절 > 전체적인 배치 마무리하기
