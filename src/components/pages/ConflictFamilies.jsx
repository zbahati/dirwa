import IntervationReusableComponent from "./InterventionReusableComponent";
import Gusura from "../../assets/gusura3.jpg";
import Footer from "../Footer";

const ConflictFamilies = () => {
  const WomenData = {
    title: "Conflict Families",
    imgSrc: Gusura,
    listItems: [
      "The importance of Family cohesion",
    ],
  };
  return (
    <div>
      <div className="mb-5">
        <IntervationReusableComponent {...WomenData} />
      </div>
      <div className="my-5 mx-5 text-justify">
        <div className="my-3">
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>

        <div className="mb-5">
          <p className="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            tempora molestias dolor perferendis magnam, deleniti temporibus
            culpa animi aspernatur necessitatibus ipsam amet fugit officia
            doloribus incidunt harum dicta expedita.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConflictFamilies;
