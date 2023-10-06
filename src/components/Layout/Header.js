import React, {useState, useEffect} from 'react'
import style from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import Img from '../../assets/header_img.png'

function Header(props) {

  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <header className={`${style.header} ${isFloating ? '' : style.headerNotFloating}`} >
        <h1>Bakshanam</h1>
        <HeaderCartButton/>
    </header>
    <div>
            <img className={style.bgImg} src={Img} alt="img" />
    </div>
    </>
  )
}

export default Header