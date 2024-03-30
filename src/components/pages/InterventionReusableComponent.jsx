/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const IntervationReusableComponent = ({ title, imgSrc, listItems }) => {
  const [showImage, setShowImage] = useState(!!imgSrc);

  useEffect(() => {
    setShowImage(!!imgSrc);
  }, [imgSrc]);

  return (
    <div>
      <h1 className="p-4 bg-[#6daefd] text-white font-semibold text-xl md:text-5xl">
        {title}
      </h1>
      <div className="w-full flex flex-col xl:flex-row gap-2 bg-[#dee1e4] pl-1">
        {showImage && (
          <div className="xl:px-4 xl:w-1/2 flex items-center mx-auto">
            <img src={imgSrc} alt={title} />
          </div>
        )}
        <ul
          className={`mx-auto ml-2 ${
            showImage ? "w-2/2" : "w-[90%]"
          } px-4 md:px-0 text-justify  md:flex flex-col gap-3 mt-4 list-none font-thin mb-2`}
        >
          {listItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntervationReusableComponent;
