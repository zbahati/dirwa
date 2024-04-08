import IntervationReusableComponent from "./InterventionReusableComponent";
import Child from "../../assets/busasamana work helping.jpg";
import Footer from "../Footer";

const Youth = () => {
  const YouthData = {
    title: "Youth",
    imgSrc: Child,
    listItems: [
      "Youths in Action: Youth Volunteers Support their Community and Peers",
    ],
  };
  return (
    <div>
      <div className="mb-10">
        <IntervationReusableComponent {...YouthData} />
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

        <div className="mb-10">
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

export default Youth;
