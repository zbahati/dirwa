
import { Link } from 'react-router-dom';
import group_team from './../assets/femme.jpg'
const HeroSection = () => {
  return (
    <div className='px-2 mx-auto mb-3'>
      <div className='w-full h-[400px] relative bg-gradient-to-br from-black/90 to-black/0 z-1'>
        <img src={group_team} alt="banner" className='absolute w-full object-cover h-[400px] z-[-2]' />
        <h1 className=' text-3xl md:text-5xl absolute top-1/2 mx-3 text-white'>DUHUMURIZANYE IWACU RWANDA</h1>
        <Link to="" className='text-md absolute top-[70%] mx-6 text-white font-bold cursor-pointer bg-blue-400 px-5 py-3 hover:translate-x-2 duration-100 hover:bg-blue-300 '>Read more</Link>
      </div>
    </div>
  );
}

export default HeroSection;