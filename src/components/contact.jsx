import background from "../assets/phone2.avif";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="">
      <h1 className="text-3xl text-center mb-5 capitalize font-bold py-3 px-2 underline underline-offset-8 decoration-blue-100">
        Contact us
      </h1>
      <div
        className="bg-center bg-no-repeat bg-cover  relative"
        style={backgroundImageStyle}
      >
        <form
          action=""
          className="grid grid-cols-1  bg-gradient-to-r from-black to-black/30  gap-3 md:mx-2 mt-10"
        >
        <div className="flex justify-center items-center">
        <div className="lg:w-1/2 grid grid-row-4 gap-4 mt-32">
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 ">
              <input
                className=" outline-none h-10 rounded px-3"
                type="text"
                name="names"
                required
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 mt-8">
              <input
                className=" outline-none h-10 rounded px-3"
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col mx-auto gap-3 md:w-2/3 mt-8">
              <textarea
                className="outline-none rounded px-3"
                name="message"
                rows="5"
                required
                placeholder="Message"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:w-1/3 mx-auto p-2">
              <button
                type="submit"
                className="bg-blue-400 py-2 px-2 rounded font-semibold hover:scale-[97% hover:bg-blue-300 mb-8 mt-8"
              >
                Submit
              </button>
            </div>
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
