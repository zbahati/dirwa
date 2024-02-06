import { useEffect, useState } from "react";

const IntervationReusableComponent = ({ title, imgSrc, listItems }) => {
  const [Image, setImange] = useState(false);
  useEffect(() => {
    if (imgSrc) {
      setImange(true)
    }
  }, [imgSrc]);

  return (
    <div className="p-2 mx-auto">
      <h1 className="md:text-center text-2xl md:mt-2 font-bold md:text-5xl">{title}</h1>
      <div className='w-full flex flex-col xl:flex-row gap-2 mt-4'>
        <div className={Image ? `mt-2 xl:px-4 xl:w-1/2 flex items-center mx-auto` : 'hidden'}>
          <img src={imgSrc} alt={title} />
        </div>
        <ul className={`mx-auto ${Image ? 'w-1/2' : 'w-[90%]'} px-4 md:px-0 text-justify list-disc text-xl md:flex flex-col gap-3 mt-4`}>
          {listItems.map((item, index) => (
            <li key={index} className="pt-2">{item}</li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default IntervationReusableComponent;