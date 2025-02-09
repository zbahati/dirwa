import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../assets/Logo.jpg";

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
    setNav(false);
  };

  const handleAboutUs = () => {
    setAboutUs(!clickAboutUs);
    setJoinUs(false);
    setIntervention(false);
    setParticipation(false);
    setPublication(false);
    setWhereWeWork(false);
    setNav(false);
  };

  const handleToggleMenu = () => {
    setNav(!nav);
  };

  const handleHideSidebar = () => {
    setAboutUs(false);
    setPublication(false);
    setJoinUs(false);
    setParticipation(false);
    setNav(false);
  };

  return (
    <div>
      <header className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center p-2 ml-5">
            <img src={logo} alt="logo" className="h-14 w-14" />
            <h1 className="hidden md:text-1xl md:inline lg:text-3xl capitalize font-extralight text-blue-400">
              <span className="font-bold text-2xl">Duhumurizanye </span>{" "}
                <span className="font-bold text-2xl">Iwacu </span>
                <span className="border-l-2 border-blue-400 pl-2">
                <span className="text-4xl">Rwanda</span>{" "}
              </span>
            </h1>
          </div>

          <button
            type="button"
            className="hidden sm:inline w-32 h-10 bg-blue-400 text-white text-1xl outline-none hover:bg-blue-300 cursor-pointer"
          >
            DONATE
          </button>
          {nav ? (
            <button
              type="button"
              onClick={handleHideSidebar}
              className="absolute text-3xl text-white cursor-pointer z-30 top-0 right-3 pt-5 mr-3"
            >
              <FaX />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleToggleMenu}
              className="sm:hidden"
            >
              <FaBars size={33} className="mr-2 text-[#0072bc] border-none border-radius" />
            </button>
          )}
        </div>
        <nav>
          <ul
            className={
              nav
                ? "flex flex-col text-xl gap-10 h-screen absolute w-full duration-1000 text-white px-10 justify-center top-0 bottom-0 left-0 backdrop-blur-md bg-slate-600 z-20"
                : "hidden sm:flex sm:justify-between sm:items-center bg-[#6daefd] md:py-2 text-white text-xl border-b-8 sm:p-2"
            }
          >
            <li className="cursor-pointer text-base" onClick={handleAboutUs}>
              <Link to="" className={clickAboutUs ? "" : ""}>
                ABOUT US
              </Link>
              <hr className="border-b border-blue-100 mt-1" />
            </li>
            <li
              onClick={handleParticipation}
              className={`relative cursor-pointer text-base${
                clickParticipation ? "" : ""
              }`}
            >
              <span>PARTICIPANTS</span>
              <hr className="border-b border-blue-100 mt-1" />
              <ul
                className={
                  clickParticipation
                    ? " bg-slate-100 hover:bg-slate-200 w-64 absolute py-2 my-4 z-10 underline underline-offset-8 text-black border-2 font-extralight"
                    : "hidden"
                }
              >
                <li className="py-2 hover:bg-slate-50">
                  <Link to="/Youth" onClick={handleHideSidebar} className="mx-3">
                    Youth
                  </Link>
                </li>
                <li className="hover:bg-slate-50 py-2 text-black">
                  <Link to="/Women" onClick={handleHideSidebar} className="my-4 mx-3">
                    Women
                  </Link>
                </li>
                <li className="hover:bg-slate-50 py-2">
                  <Link to="/Conflict" onClick={handleHideSidebar} className="my-4 mx-3">
                    Conflict families
                  </Link>
                </li>
                <li className="hover:bg-slate-50 py-2">
                  <Link to="/Refugees" onClick={handleHideSidebar} className="my-4 mx-3">
                    Refugees
                  </Link>
                </li>
                <li className="hover:bg-slate-50 py-2">
                  <Link to="/Community" onClick={handleHideSidebar} className="my-4 mx-3">
                    Community leaders
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`relative cursor-pointer text-base font-extralight ${
                clickIntervention ? "" : ""
              }`}
              onClick={handleIntervention}
            >
              <span>INTERVENTION</span>
              <hr className="border-b border-blue-100 mt-1" />
              <ul
                className={
                  clickIntervention
                    ? " bg-slate-100 hover:bg-slate-200 w-64 absolute py-2 my-4 z-10 underline underline-offset-8 text-black border-2 font-extralight"
                    : "hidden"
                }
              >
                <li className="hover:bg-slate-50 py-2 px-3">
                  <Link
                    to="/Healing"
                    onClick={handleHideSidebar}
                    className="my-4"
                  >
                    Healing & Peace Building
                  </Link>
                </li>
                {/* <li className='hover:bg-slate-50 py-2'>
                  <Link to="/Psycho_social_care" onClick={handleHideSidebar} className='my-4 mx-3'>Psycho-social Care</Link>
                </li> */}
                <li className="hover:bg-slate-50 py-2 px-3">
                  <Link
                    to="/Asset_base_community"
                    onClick={handleHideSidebar}
                    className="my-4 "
                  >
                    Asset Base Community Development
                  </Link>
                </li>
                <li className="hover:bg-slate-50 py-2 px-3">
                  <Link
                    to="/Active_by_standship"
                    onClick={handleHideSidebar}
                    className="my-4"
                  >
                    Active by Standship Development
                  </Link>
                </li>
                {/* <li className='hover:bg-slate-50 py-2'>
                  <Link to="/how_we_help" onClick={handleHideSidebar} className='my-4 mx-3'>How we help</Link>
                </li> */}
              </ul>
            </li>
            <li className="cursor-pointer text-base" onClick={handleWhereWeWork}>
              <Link to="/Where_we_work" className={clickAboutUs ? "" : ""}>
                WHERE WE WORK
              </Link>
              <hr className="border-b border-blue-100 mt-1" />
            </li>
            <li
              className={`cursor-pointer text-base ${
                clickPublication ? "" : ""
              }`}
              onClick={handlePublication}
            >
              <span>PUBLICATIONS</span>
              <hr className="border-b border-blue-100 mt-1" />
              <ul
                className={
                  clickPublication
                    ? " bg-slate-100 hover:bg-slate-200 w-64 absolute py-2 my-4 z-10 underline underline-offset-8 text-black border-2"
                    : "hidden"
                }
              >
                <li className="hover:bg-slate-50 py-2 px-3 font-extralight">
                  <Link to="/News_and_stories" onClick={handleHideSidebar} className="my-4 mx-1">
                    News & Stories
                  </Link>
                </li>
                
                <li className="hover:bg-slate-50 py-2 px-3 font-extralight">
                  <Link to="/Announcements" onClick={handleHideSidebar} className="my-4 mx-1">
                    Announcements
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`relative cursor-pointer text-base ${
                clickJoinUs ? "" : ""
              }`}
              onClick={handleJoinUs}
            >
              <span>JOIN US</span>
              <hr className="border-b border-blue-100 mt-1" />
              <ul
                className={
                  clickJoinUs && nav
                    ? "absolute w-64 py-2 z-10 underline underline-offset-8 border-2  bg-slate-100 hover:bg-slate-200 text-black"
                    : clickJoinUs
                    ? "absolute w-64 transform -translate-x-64 py-4 my-4 mx-20 z-10 underline underline-offset-8  bg-slate-100 text-black"
                    : "hidden"
                }
              >
                <li className="py-2 px-3  bg-slate-100 hover:bg-white  font-extralight">
                  <Link to="/Volunteer" onClick={handleHideSidebar}>
                    Volunteer
                  </Link>
                </li>
                <li className="py-2 px-3  bg-slate-100 hover:bg-white font-extralight ">
                  <Link to="/Internship" onClick={handleHideSidebar}>
                    Internship Program
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      {nav ? (
        <div className="w-full h-screen left-0 top-0 bottom-0 absolute bg-gray-300 /50"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
