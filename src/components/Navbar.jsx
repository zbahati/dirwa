import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa6';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <header className='p-2 mx-auto'>
      <div className="flex justify-between items-center">
        <div className='flex gap-2 items-center'>
          <img src={logo} alt="logo" className="h-28 w-28"/>
          <h1 className='text-2xl md:text-3xl lg:text-4xl'>Duhumurizanye Iwacu Rwanda</h1>
        </div>
        <button type="button">Donate</button>
        <button type="button">
          <FaBars size={30}/>
        </button>
      </div>
      <nav>
        <ul className="">
          <li>
            <Link to="">About us</Link>
          </li>
          <li>
            <Link to="">
              <span>Participants</span>
              <ul>
                <li>
                  <Link to="">Youth</Link>
                </li>
                <li>
                  <Link to="">Women</Link>
                </li>
                <li>
                  <Link to="">Conflict families
                  </Link>
                </li>
                <li>
                  <Link to="">Refugees
                  </Link>
                </li>
                <li>
                  <Link to="">Community leaders
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Intervetion</span>
              <ul>
                <li>
                  <Link to="/Healing">Healing and Peace Building</Link>
                </li>
                <li>
                  <Link to="/Psycho_social_care">Psycho-social Care</Link>
                </li>
                <li>
                  <Link to="/Asset_base_community">Asset Base Community Development</Link>
                </li>
                <li>
                  <Link to="/Active_by_standship">Active by Standship Development</Link>
                </li>
                <li>
                  <Link to="/how_we_help">How we help</Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="/Where_we_work">where we work</Link>
          </li>
          <li>
            <Link to="">
              <span>Publications</span>
              <ul>
                <li>
                  <Link to="">News</Link>
                </li>
                <li>
                  <Link to="">Stories</Link>
                </li>
                <li>
                  <Link to="">Announcements
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Join us</span>
              <ul>
                <li>
                  <Link to="">Volunteer</Link>
                </li>
                <li>
                  <Link to="">Internship Program</Link>
                </li>
              </ul>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
