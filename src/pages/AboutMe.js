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
    navigate('/aboutMe/viewPortfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

          <video className="backgroundVideo" autoPlay muted loop >
            <source src='/mainsiteVideo.mp4' type='video/mp4' />
          </video>
          
          <motion.div
            className='bannerWrap' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>


            <div>

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
                animate={{ y: 0, opacity: 1 }}
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

            </div>

          </motion.div>

          <motion.div className='induce' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
            <motion.span initial={{ y: 0 }} animate={{ y: 45 }} transition={{ duration: 1.5, delay: 2, repeat: Infinity }}></motion.span>
          </motion.div>

          <div className='faithWrap'>

            <div className='mobileBar'></div>

            <motion.p initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ opacity: { duration: 2, delay: 1 }, x: { delay: 1, duration: .5 } }}>간단한 소개</motion.p>

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
                    <li>스토리텔링</li>
                    <li>노력</li>
                    <li>힐링되는</li>
                    <li>성취감</li>
                  </ul>
                </div>

                <div className='btnWrap'>
                  <motion.button type='button' className='eng' onClick={gotoViewportfolio} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }}>PLAY</motion.button>
                  <motion.button type='button' className='eng' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 500 }} onClick={copyToClipboard}>MY LIST</motion.button>
                </div>

                <p className='explain'>
                  코딩과 React를 공부하며 정말 오랜만에 공부에 재미를 느꼈던 것 같습니다. <br />
                  구현하고싶은 기능을 위해 공부하고 코드를 작성하는 과정에서, <br />
                  때로는 스트레스받고 때로는 성취감을 맛보았습니다. <br />
                  스트레스는 코드 구현을 위한 자극제가 되었고 <br />
                  비로소 구현했을때의 성취감이 저를 정말 행복하게하는 것 같습니다. <br />
                  아직 구현하고싶은 기능이 정말 많습니다. <br />
                  열심히, 그리고 꾸준히 공부하며 성장하겠습니다.
                </p>

                <p className='mobileExplain'>
                  코딩과 React를 공부하며 정말 오랜만에 공부에 재미를 느꼈던 것 같습니다.<br />
                  구현하고싶은 기능을 위해 공부하고 코드를 작성하는 과정에서,
                  때로는 스트레스받고 때로는 성취감을 맛보았습니다.<br />
                  스트레스는 코드 구현을 위한 자극제가 되었고
                  비로소 구현했을때의 성취감이 저를 정말 행복하게하는 것 같습니다.
                  아직 구현하고싶은 기능이 정말 많습니다.<br />
                  열심히, 그리고 꾸준히 공부하며 성장하겠습니다.
                </p>
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