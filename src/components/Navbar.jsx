import React, {useState} from 'react'
import Logo from "../assets/PLM.png"
import LogoFb from "../assets/square-facebook.svg"
import LogoIg from "../assets/square-instagram.svg"
import LogoTwitter from "../assets/square-x-twitter.svg"
import LogoIn from "../assets/linkedin.svg"
import LogoYt from "../assets/youtube.svg"
import { useNavigate } from 'react-router-dom'





const Navbar = () => {

  const [showAnnouncement, setShowAnnouncement] = useState(false)

  const navigate = useNavigate()

  const toggleShowAnnouncement = () =>{
    setShowAnnouncement(!showAnnouncement)
    navigate('/plmat')
  }

  const toggleShowPLMAT = () =>{
    setShowAnnouncement(!showAnnouncement)
    navigate('/')
  }



  
  return (
    <>
    <div className='grid grid-cols-3 h-20 items-center justify-items-center md:mt-3'>
      <div className='mr-12 md:ml-[13rem] md:flex md:items-center lg:ml-[10rem] xl:ml-[5rem]'>
        <a href="https://plm.edu.ph/" target='_blank'><img src={Logo} alt="" className='w-12 lg:w-[5rem] ' /></a>
        <h1 className='hidden md:block md:w-[25rem] md:ml-2'>PAMANTASAN NG LUNGSOD NG MAYNILA {"\n"} UNIVERSITY OF THE CITY MANILA</h1>
      </div>
      <div className='grid grid-cols-5 gap-1 w-32 items-center mr-10 md:ml-[16rem] lg:ml-[16rem] lg:gap-5 lg:w-[15rem] xl:ml-[9rem]'>
        <div className={`${showAnnouncement ? "md:hidden block" : "block"}`}>
          <a href="https://www.facebook.com/PLM.Haribon" target='_blank'><img src={LogoFb} alt="" className='w-10' /></a>
        </div>
        <div className={`${showAnnouncement ? "md:hidden block" : "block"}  `}>
          <a href="https://www.instagram.com/plm.edu.ph/" target='_blank'><img src={LogoIg} alt="" className='w-10' /></a>
        </div>
        <div className={`${showAnnouncement ? "md:hidden block" : "block"}  `}>
          <a href="https://www.linkedin.com/school/pamantasan-ng-lungsod-ng-maynila/" target='_blank'><img src={LogoIn} alt="" className='w-10' /></a>
        </div>
        <div className={`${showAnnouncement ? "md:hidden block" : "block"}  `}>
          <a href="https://x.com/plm_manila" target='_blank'><img src={LogoTwitter} alt="" className='w-10' /></a>
        </div>
        <div className={`${showAnnouncement ? "md:hidden block" : "block"}  `}>
          <a href="https://www.youtube.com/@pamantasannglungsodngmayni3086" target='_blank'><img src={LogoYt} alt="" className='w-10' /></a>
        </div>
      </div>
      <div className={`${showAnnouncement ? "hidden" : "bg-[#F22F2F] w-20 flex items-center justify-center text-white h-8 md:ml-28 lg:w-[8rem] lg:h-10 xl:ml-[15rem] cursor-pointer"}`} onClick={toggleShowAnnouncement}>
        <h1 className='font-bold text-lg lg:text-2xl'>PLMAT</h1>
      </div>
      <div className={`${showAnnouncement ? "bg-[#F22F2F] w-20 flex items-center justify-center text-white h-8 md:ml-28 lg:w-[8rem] lg:h-10 xl:ml-[15rem] cursor-pointer" : "hidden"}`} onClick={toggleShowPLMAT}>
        <h1 className='font-bold text-[0.5rem] lg:text-sm'>ANNOUNCEMENT</h1>
      </div>
      
    </div>
    


    </>
  )
}

export default Navbar
