import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaX } from "react-icons/fa6";
import logo from '../assets/Logo.jpg';

const Navbar = () => {
  const [clickIntervention, setIntervention] = useState(false);
  const [clickPublication, setPublication] = useState(false);
  const [clickJoinUs, setJoinUs] = useState(false);
  const [clickParticipation, setParticipation] = useState(false);
  const [clickAboutUs, setAboutUs] = useState(false);
  const [clickWhereWeWork, setWhereWeWork] = useState(false);
  const [nav, setNav] = useState(false);

  const handleIntervention = () => {
    setIntervention(!clickIntervention);
    setJoinUs(false);
    setParticipation(false);
    setPublication(false);
    setAboutUs(false);
    setWhereWeWork(false);
  };

  const handlePublication = () => {
    setPublication(!clickPublication);
    setJoinUs(false);
    setIntervention(false);
    setParticipation(false);
    setAboutUs(false);
    setWhereWeWork(false);
  };

  const handleJoinUs = () => {
    setJoinUs(!clickJoinUs);
    setIntervention(false);
    setParticipation(false);
    setPublication(false);
    setAboutUs(false);
    setWhereWeWork(false);
  };

  const handleParticipation = () => {
    setParticipation(!clickParticipation);
    setJoinUs(false);
    setIntervention(false);
    setPublication(false);
    setAboutUs(false);
    setWhereWeWork(false);
  };

  const handleWhereWeWork = () => {
    setWhereWeWork(!clickWhereWeWork);
    setJoinUs(false);
    setIntervention(false);
    setParticipation(false);
    setPublication(false);
    setAboutUs(false);
    setNav(false)
  };

  const handleAboutUs = () => {
    setAboutUs(!clickAboutUs);
    setJoinUs(false);
    setIntervention(false);
    setParticipation(false);
    setPublication(false);
    setWhereWeWork(false);
    setNav(false)
  };

  const handleToggleMenu = () => {
    setNav(!nav);
  };

  const handleHideSidebar = () => {
    setAboutUs(false);
    setPublication(false);
    setJoinUs(false);
    setParticipation(false);
    setNav(false)
  }

  return (
    <div>
      <header className='p-2 mx-auto'>
        <div className="flex justify-between items-center p-5">
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className="h-14 w-14" />
            <h1 className='hidden md:text-1xl md:inline lg:text-3xl capitalize font-semibold text-blue-400'>Duhumurizanye Iwacu Rwanda</h1>
          </div>
          <button
            type="button"
            className='hidden sm:inline w-32 h-10 bg-blue-400 text-white text-1xl outline-none rounded-lg hover:bg-blue-300 cursor-pointer'>Donate</button>
          {nav ? <button type='button' onClick={handleHideSidebar} className='absolute text-2xl text-white cursor-pointer z-30 top-0 right-2 pt-3'><FaX /></button> : <button type="button" onClick={handleToggleMenu} className='sm:hidden'>
            <FaBars size={30} />
          </button>
          }
        </div>
        <nav>
          <ul className={nav ? 'flex flex-col text-xl gap-8 h-screen absolute w-full duration-300 text-black font-semibold top-0 bottom-0 left-0 bg-blue-500 pt-3 z-20 px-2 rounded-md' : 'hidden sm:flex sm:justify-between sm:items-center bg-[#6daefd] md:py-2 text-white text-xl sm:border-2 sm:p-2'}>
            <li className='cursor-pointer' onClick={handleAboutUs}>
              <Link to="" className={clickAboutUs ? 'underline underline-offset-8' : ''}>ABOUT US</Link>
            </li>
            <li onClick={handleParticipation} className={`relative cursor-pointer ${clickParticipation ? 'underline underline-offset-8' : ''}`}>
              <span>PARTICIPANTS</span>
              <ul className={clickParticipation ? ' bg-slate-300 w-64 absolute py-2 my-4 z-10 underline underline-offset-8 border-2' : 'hidden'}>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='mx-3'>Youth</Link>
                </li>
                <li className='hover:bg-slate-50 py-2' >
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Women</Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Conflict families
                  </Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Refugees
                  </Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Community leaders
                  </Link>
                </li>
              </ul>

            </li>
            <li className={`relative cursor-pointer ${clickIntervention ? 'underline underline-offset-8' : ''}`} onClick={handleIntervention}>
              <span>INTERVENTION</span>
              <ul className={clickIntervention ? ' bg-slate-300 w-[340px] absolute py-2 my-4 z-10 underline underline-offset-8 border-2' : 'hidden'} >
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="/Healing" onClick={handleHideSidebar} className='my-4 mx-3'>Healing and Peace Building</Link>
                </li>
                {/* <li className='hover:bg-slate-50 py-2'>
                  <Link to="/Psycho_social_care" onClick={handleHideSidebar} className='my-4 mx-3'>Psycho-social Care</Link>
                </li> */}
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="/Asset_base_community" onClick={handleHideSidebar} className='my-4 mx-3'>Asset Base Community Development</Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="/Active_by_standship" onClick={handleHideSidebar} className='my-4 mx-3'>Active by Standship Development</Link>
                </li>
                {/* <li className='hover:bg-slate-50 py-2'>
                  <Link to="/how_we_help" onClick={handleHideSidebar} className='my-4 mx-3'>How we help</Link>
                </li> */}
              </ul>
            </li>
            <li onClick={handleWhereWeWork} className='cursor-pointer'>
              <Link to="/Where_we_work" onClick={handleHideSidebar} className={clickWhereWeWork ? 'underline underline-offset-8' : ''} >WHERE WE WORK</Link>
            </li>
            <li className={`cursor-pointer ${clickPublication ? 'underline underline-offset-8' : ''}`} onClick={handlePublication}>
              <span>PUBLICATIONS</span>
              <ul className={clickPublication ? ' bg-slate-300 w-64 absolute py-2 my-4 z-10 underline underline-offset-8 border-2' : 'hidden'} >
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>News</Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Stories</Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar} className='my-4 mx-3'>Announcements
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`relative cursor-pointer ${clickJoinUs ? 'underline underline-offset-8' : ''}`} onClick={handleJoinUs}>
              <span>JOIN US</span>
              <ul className={clickJoinUs && nav ? ' bg-slate-300 absolute w-64 py-2 my-4 z-10 underline underline-offset-8 border-2' : clickJoinUs ? ' bg-slate-300 absolute w-64 transform translate-x-[-200px] py-2 my-4 z-10 underline underline-offset-8 border-2' : 'hidden'} >
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar}>Volunteer</Link>
                </li>
                <li className='hover:bg-slate-50 py-2'>
                  <Link to="" onClick={handleHideSidebar}>Internship Program</Link>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      </header>
      {
        nav ? <div className='w-full h-screen left-0 top-0 bottom-0 absolute bg-gray-300 /50'></div>
          : ''
      }

    </div >

  );
};

export default Navbar;
