import background from '../assets/phone2.avif';

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };


  return (
    <div className="">
      <h1 className="text-3xl capitalize font-bold py-3 px-2 underline underline-offset-8 decoration-blue-400">Contact us</h1>
      <div className="bg-center bg-no-repeat bg-cover  relative" style={backgroundImageStyle}>
        <form action="" className='grid grid-cols-1  bg-gradient-to-r from-black to-black/30  gap-3 md:mx-2'>
          <h2 className='text-3xl text-white  font-bold py-4 px-5'>Get In touch!</h2>
          <div className=" border-[1px] border-blue-400 lg:w-1/2 grid grid-row-4 gap-4 ">
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 ">
              <p className='text-xl font-semibold pt-2 text-gray-400'>Names</p>
              <input className=' outline-none h-10 rounded px-3' type="text" name="names" required />
            </div>
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 ">
              <p className='text-xl font-semibold pt-2 text-gray-400'>Names</p>
              <input className=' outline-none h-10 rounded px-3' type="text" name="names" required />
            </div>
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 ">
              <p className='text-xl font-semibold pt-2 text-gray-400'>Message</p>
              <textarea className='outline-none rounded px-3' name="message" rows="5" required></textarea>
            </div>

            <div className="grid grid-cols-1 md:w-1/3 mx-auto p-2">
              <button type="submit" className='bg-white py-2 px-2 rounded font-semibold hover:scale-[97% hover:bg-gray-400'>Submit</button>
            </div>
          </div>
        </form>
        {/* <div className=' bg-gradient-to-r from-black to-black/20  absolute top-0 bottom-0 right-0 left-0 z-10'>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
