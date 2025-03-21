import logo from './logo.svg';
import './css/app/app.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function App() {

  const [bgChange, setBgChange] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  const [yValue,seteYValue] = useState(window.innerWidth <= 1279 ? 120 : 165)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1279) {
        seteYValue(120);
      } else {
        seteYValue(165);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const btnClick = () => {
    console.log("버튼클릭감지")
    setIsHidden(true)
    setBgChange(true)
    setTimeout(() => {
      navigate("/aboutMe")
    }, 3000)
  }

  const email = "tkdals58799@gmail.com"
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => alert("클립보드에 이메일 주소가 복사되었습니다 !"))
      .catch((error) => console.log("클립보드에 이메일 주소를 복사하는데 실패하였습니다.", error))
  }

  return (
    <motion.div className="App"
      animate={bgChange ? { backgroundImage: 'none', backgroundColor: '#222' } : { backgroundImage: 'background-image: url(../../../public/reactBg.jpg)' }}
      transition={{ delay: 1.5, duration: .5 }}>

      {/* 리액트아이콘 */}
      <motion.figure
        animate={{ y: isHidden ? yValue : 0, scale: isHidden ? 100 : 1, opacity: isHidden ? 0 : 1 }}
        transition={{ y: { duration: 0.1, type: "spring", stiffness: 700 }, scale: { duration: 1.5, delay: .5 }, opacity: { duration: 1.5, delay: 1.5 } }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </motion.figure>
      {/* // 리액트아이콘 */}

      <div className='app-inner'>
        <div className='textBox'>
          <motion.h1>
            {
              "Sangmin's Portfolio".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1, x: 0, y: 0 }}
                  animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? Math.random() * 1200 - 600 : 0,
                    y: isHidden ? Math.random() * 1200 - 600 : 0,
                    rotate: isHidden ? Math.random() * 360 : 0
                  }}
                  transition={{ duration: .5, delay: .14 }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))
            }
          </motion.h1>

          <motion.h2 animate={{ opacity: isHidden ? 0 : 1 }} >웹 퍼블리셔 이상민의 포트폴리오입니다.</motion.h2>

        </div>

        <motion.button
          onClick={btnClick}
          type='button'
          className='startBtn'
          whileTap={{ scale: 0.8 }}
          animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? 200 : 0 }}
          transition={{ type: "spring", stiffness: 500, opacity: { duration: .5, delay: .09 }, y: { duration: 1, delay: .2 } }}
        >Start</motion.button>
      </div>

      {/* 내정보 */}
      <motion.div className='infoBox' animate={isHidden ? { opacity: 0 } : { opacity: 1 }}>
        <p onClick={copyToClipboard} style={{ cursor: 'pointer' }}>E-mail : tkdals58799@gmail.com</p>
        <p>Phone Number : 010-5490-5699</p>
        <p>Update : 2025.03.10</p>
      </motion.div>
      {/* // 내정보 */}

      <motion.p className='bottomText' animate={isHidden ? { opacity: 0 } : { opacity: 1 }}>@ 2025 / Web-Publisher / Lee sangmin</motion.p>

    </motion.div>
  );
}

export default App;
